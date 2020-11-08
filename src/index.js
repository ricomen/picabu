import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/AppContainer';

import { createServer } from 'miragejs';
import mockServer from './mock/mockapi';

createServer(mockServer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);