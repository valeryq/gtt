import React, { Component, PropTypes } from 'react';
import Input from '../../../../components/forms/Input';
import extractFormData from '../../../../utils/extractFormData';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  /**
   * Event when component will mount
   */
  componentWillMount() {
    if (this.props.onMounted) {
      this.props.onMounted();
    }
  }

  /**
   * Get form data
   *
   * @returns {{}}
   */
  getFormData() {
    const fields = ['login', 'password', 'rememberme'];

    return extractFormData.call(this, fields);
  }

  /**
   * Submit form event handler
   *
   * @param e
   *
   * @returns {*|{type}}
   */
  submitForm(e) {
    e.preventDefault();

    return this.props.submitForm(this.getFormData());
  }

  /**
   * Render component
   *
   * @returns {XML}
   */
  render() {
    const formName = 'form__form-signin';
    const { errors } = this.props;

    const loginField = {
      id: 'login',
      type: 'text',
      label: 'Login',
      ref: 'login',
      errors: errors.login,
      prefixClassName: formName
    };

    const passwordField = {
      id: 'password',
      type: 'password',
      label: 'Password',
      ref: 'password',
      errors: errors.password,
      prefixClassName: formName
    };

    const rememberField = {
      id: 'rememberme',
      type: 'checkbox',
      label: 'Remember me',
      ref: 'rememberme',
      prefixClassName: formName
    };

    return (
      <section className={'form form--half-width ' + formName}>
        <form onSubmit={this.submitForm}>
          <Input { ...loginField } />
          <Input { ...passwordField } />
          <Input { ...rememberField } />
          <button className={formName + '-submit'} type="submit">Log in</button>
          <a className={formName + '-help'} href="#">Need help logging in?</a>
        </form>
      </section>
    );
  }
}

LoginForm.propTypes = {
  errors: PropTypes.object,
  submitForm: PropTypes.func.isRequired,
  onMounted: PropTypes.func,
};

export default LoginForm;
