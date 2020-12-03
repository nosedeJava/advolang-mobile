import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { login } from '../../api/auth';
import EmailFormLogin from './EmailFormLogin';

const LoginScreen = ({ onSignIn }) => {

  return (
    <EmailFormLogin
      buttonText="Log in"
      onSubmit={login}
      onAuthentication={() => onSignIn}
    >
      <Button
        title="Create account"
        onPress={onSignIn}
      />
    </EmailFormLogin>
  );
};

export default LoginScreen;