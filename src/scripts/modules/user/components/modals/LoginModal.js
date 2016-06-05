import React from 'react';
import LoginFormContainer from '../../containers/LoginFormContainer';
import SocialLoginForm from '../forms/SocialLoginForm';

/**
 * Login modal component
 * @returns {XML}
 * @constructor
 */
function LoginModal() {
  return (
    <section className="modal modal--large">
      <header className="modal__header">
        <h1 className="modal__header-title">Log in to the Site</h1>

        <a className="modal__header-close-modal" href="#"></a>
      </header>
      <main className="modal__content">
        <SocialLoginForm />
        <LoginFormContainer />
      </main>
      <footer className="modal__footer">
        <h3 className="modal__footer-title">Dont have an account yet? <a className="modal__footer-title-link" href="#">Sign up</a></h3>
      </footer>
    </section>
  );
}

export default LoginModal;