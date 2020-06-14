import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "./auth";
import config from "./auth_config.json";
import history from "./utils/history";
import { ScoreProvider } from "./contexts/ScoreContext";
import App from './App';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    audience={config.audience}
  >
    <React.StrictMode>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </React.StrictMode>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
