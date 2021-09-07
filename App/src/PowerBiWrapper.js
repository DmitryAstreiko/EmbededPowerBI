import { MsalProvider } from '@azure/msal-react';
import React from 'react';
import { msalObj } from './auth-config';
import PowerBi from './PowerBI';

export default class PowerBiWrapper extends React.Component {
  render() {
    return (
      <div>
        <MsalProvider instance={msalObj}>
          <PowerBi />
        </MsalProvider>;
      </div>
    )
  }
}