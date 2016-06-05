import { SUCCESS_LOGIN, ERROR_LOGIN } from '../../actions/user';

const initialState = {
  values: {
    login: '',
    password: '',
  },
  errors: {
    login: [],
    password: [],
  }
};

export default function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return { ...state, values: { ...state.values, ...action.data }, errors: { ...initialState.errors } };

    case ERROR_LOGIN:
      return { ...state, errors: { ...action.errors } };

    default:
      return state;
  }
}
