import Validator from 'validatorjs';

const constraints = {
  login: ['required', 'min:3', 'regex:/^[a-z0-9 \\-\']+$/'],
  password: ['required', 'min:3'],
};

/**
 * Login validator creator
 *
 * @param data
 */
function loginValidator(data) {
  return new Validator(data, constraints);
}

export default loginValidator;
