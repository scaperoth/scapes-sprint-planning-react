import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import reducers from '../reducers';

let middleware = [promise];
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  middleware = [...middleware, logger];
}

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
