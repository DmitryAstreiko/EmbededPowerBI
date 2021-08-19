import { PublicClientApplication, AuthenticationResult, Configuration } from '@azure/msal-browser';
 
enum MsalConfig {
  ClientId = 'c148e280-579c-4e16-8e74-6ef7d818d097',
  Epam_AAD = 'b41b72d0-4e9f-4c26-8a69-f949f367c91d',
}
 
const config: Configuration = {
  auth: {
    authority: `https://login.microsoftonline.com/${MsalConfig.Epam_AAD}`,
    clientId: MsalConfig.ClientId,
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};
 
export const authenticationParameters = {
  scopes: [
    'https://analysis.windows.net/powerbi/api/App.Read.All',
    'https://analysis.windows.net/powerbi/api/Dataset.Read.All',
    'https://analysis.windows.net/powerbi/api/Dashboard.Read.All',
    'https://analysis.windows.net/powerbi/api/Report.Read.All',
  ],
};
 
export const msalObj = new PublicClientApplication(config);