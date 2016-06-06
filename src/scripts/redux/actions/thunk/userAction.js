import loginValidator from '../../../modules/user/validators/loginValidator';
import { successLoadUser, errorLoadUser, successLogin, errorLogin } from '../../actions/user';
import UserService from '../../../modules/user/services/UserService';
import { push } from 'react-router-redux';

const userService = new UserService();

/**
 * Login action
 *
 * @param data
 *
 * @returns {Function}
 */
export const loginAction = data => dispatch => {
  const validator = loginValidator(data);

  if (validator.passes()) {
    dispatch(successLogin(data));

    userService.login(data);

    dispatch(push('/welcome'));
  } else {
    dispatch(errorLogin(validator.errors.all()));
  }
};

/**
 * Logout user
 *
 * @returns {Function}
 */
export const logoutAction = () => dispatch => {
  userService.logout();
  dispatch(push('/'));
};


/**
 * Load user
 *
 * @returns {Function}
 */
export const loadUser = () => dispatch => {
  const user = userService.user();

  if (user) {
    dispatch(successLoadUser(user));
    return true;
  }

  dispatch(errorLoadUser());

  return false;
};
