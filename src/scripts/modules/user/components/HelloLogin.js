import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * Hello login component
 */
class HelloLogin extends Component {
  /**
   * Event when component will mount
   */
  componentWillMount() {
    this.props.onMounted();
  }

  /**
   * Render component
   *
   * @returns {XML}
   */
  render() {
    const { login, rememberme } = this.props;

    return (
      <div className="hello-login">
        <div className="layout-positioner">
          <h1>Hello { login }!</h1>
          <p>We { !rememberme ? 'don\'t' : null } remember you!</p>
          <a href="#" onClick={this.props.onLogout}>Log out</a>
        </div>
      </div>
    );
  }
}

HelloLogin.propTypes = {
  login: PropTypes.string.isRequired,
  rememberme: PropTypes.bool.isRequired,
  onMounted: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default HelloLogin;
