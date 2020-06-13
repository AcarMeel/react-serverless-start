import React from 'react';
import ReactDOM from 'react-dom';
import { ScoreProvider } from "./contexts/ScoreContext";
import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <ScoreProvider>
          <App />
      </ScoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
