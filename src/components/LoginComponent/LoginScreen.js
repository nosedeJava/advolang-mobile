import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { login } from '../../api/auth';
import EmailFormLogin from './EmailFormLogin';

const LoginScreen = ({ navigation }) => {
  return (
    <EmailFormLogin
      buttonText="Log in"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <Button
        title="Create account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </EmailFormLogin>
  );
};

export default LoginScreen;