import React from 'react';
import Input from '../../components/forms/input';

function LoginContainer() {
  return (
    <form onsubmit="">
      <Input id={'login'} type={'text'} label={'Login'} />
      <Input id={'password'} type={'text'} label={'Password'} />
      <Input id={'remember'} type={'checkbox'} label={'Remember me'} />
      <button>Log in</button>
      <a href="#">Need help logging in?</a>
    </form>
  );
}

export default LoginContainer;
