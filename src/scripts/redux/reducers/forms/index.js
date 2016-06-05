import { combineReducers } from 'redux';
import { LOGIN_FORM } from '../../helpers/form-helper';
import loginFormReducer from './login-form';

export default combineReducers({
  [LOGIN_FORM]: loginFormReducer,
});
