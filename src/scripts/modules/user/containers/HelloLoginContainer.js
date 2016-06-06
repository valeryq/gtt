import { connect } from 'react-redux';
import HelloLogin from '../components/HelloLogin';
import { loadUser, logoutAction } from '../../../redux/actions/thunk/userAction';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => ({
  login: state.user.login,
  rememberme: state.user.rememberme,
});

const mapDispatchToProps = (dispatch) => ({
  onMounted() {
    const isSuccess = dispatch(loadUser());
    if (!isSuccess) {
      dispatch(push('/'));
    }
  },
  onLogout() {
    dispatch(logoutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloLogin);
