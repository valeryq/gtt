import { SUCCESS_LOAD_USER } from '../actions/user';

const initialState = {
  login: '',
  password: '',
  rememberme: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUCCESS_LOAD_USER:
      return { ...state, ...{ ...initialState, ...action.data } };
    default:
      return state;
  }
}
