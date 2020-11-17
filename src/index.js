import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/AppContainer';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index';
import sagas from './sagas/index';

// Api
import { createServer } from 'miragejs';
import mockServer from './mock/mockapi';

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
);

// диспатч - метод store, который вызывает редьюсер в зависимости от переданного type
// редьюсер - функция, которая меняет state
// экшен - строка, которая описывает событие

const store = createStore(reducers, enhancers);
sagaMiddleware.run(sagas);

createServer(mockServer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);