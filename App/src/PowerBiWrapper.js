import { MsalProvider } from '@azure/msal-react';
import { msalObj } from './auth-config';
import PowerBi from './PowerBI';
 
export default () =>
    <MsalProvider instance={ msalObj }>
      <PowerBi />
    </MsalProvider>;