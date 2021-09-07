import { useAccount, useMsal } from '@azure/msal-react';
import { authenticationParameters } from './auth-config';
import { InteractionRequiredAuthError } from '@azure/msal-browser';
import PowerBiShow from './PowerBiShow';
import React, { useEffect, useState } from 'react';

function PowerBi() {
  /// ... Other code
  const [token, setToken] = useState('');

  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});
  
  useEffect(() => {
    if (inProgress === 'none' && accounts.length > 0) {
      // Retrieve an access token silently
      instance
        .acquireTokenSilent({
          ...authenticationParameters,
          account,
        })
        .then((response) => {
          if (response.accessToken) {
            // Do something with token
            // For example: getReport(response.accessToken);
            setToken(response.accessToken);
          }
          return null;
        })
        .catch((err) => {
          if (err instanceof InteractionRequiredAuthError) {
            // If interaction is needed then login using redirect.
            instance.loginRedirect(authenticationParameters);
          }
        });
    }

    // If user is not signed in then login using redirect method
    if (accounts.length === 0 && inProgress === 'none') {
      instance.loginRedirect(authenticationParameters);
    }
  }, [inProgress, accounts, instance]);

  // ...Return PowerBi embed
  return <PowerBiShow token = {token}/>
}

export default PowerBi