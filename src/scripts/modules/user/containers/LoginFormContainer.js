import { connect } from 'react-redux';
import LoginForm from '../components/forms/LoginForm';
import { LOGIN_FORM } from '../../../redux/helpers/form-helper';
import { loginAction, loadUser } from '../../../redux/actions/thunk/userAction';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => ({
  errors: state.forms[LOGIN_FORM].errors,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm(formData) {
    dispatch(loginAction(formData));
  },
  onMounted() {
    const isSuccess = dispatch(loadUser());
    if (isSuccess) {
      dispatch(push('/welcome'));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
