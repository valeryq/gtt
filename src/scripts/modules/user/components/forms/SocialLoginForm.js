import React from 'react';
import ButtonIcon from '../../../../components/forms/ButtonIcon';

/**
 * Social login form container
 * @returns {XML}
 * @constructor
 */
function SocialLoginForm() {
  return (
    <section className="form form--half-width form__social-signin">
      <ButtonIcon value="Log in with Facebook" className="social-button social-button__facebook" />
      <ButtonIcon value="Log in with Google +" className="social-button social-button__google" />
    </section>
  );
}

export default SocialLoginForm;
