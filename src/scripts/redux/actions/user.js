/* ------- Login actions ------- */
export const SUCCESS_LOGIN = 'success_login';
export const ERROR_LOGIN = 'error_login';

export const successLogin = (data) => ({ type: SUCCESS_LOGIN, data });
export const errorLogin = (errors) => ({ type: ERROR_LOGIN, errors });

/* ------- Load user actions ------- */
export const SUCCESS_LOAD_USER = 'success_load_user';
export const ERROR_LOAD_USER = 'error_load_user';

export const successLoadUser = (data) => ({ type: SUCCESS_LOAD_USER, data });
export const errorLoadUser = () => ({ type: ERROR_LOAD_USER });
