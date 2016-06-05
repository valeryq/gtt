import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import forms from './forms/index';
import user from './user';

export default combineReducers({
  forms,
  user,
  routing: routerReducer,
});
