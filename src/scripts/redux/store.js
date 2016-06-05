import { createStore, applyMiddleware } from 'redux';
import reducer from '../redux/reducers/index';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const middlewares = [routerMiddleware(browserHistory), thunk];

if (NODE_ENV === 'development') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}


export default createStore(reducer, applyMiddleware(...middlewares));
