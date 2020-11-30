import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createAccount } from '../../api/auth';
import EmailFormRegister from './EmailFormRegister';

const CreateAccount = ({ navigation }) => {
  return (
    <EmailFormRegister
      buttonText="Sign up"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate('Login')}
    >
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </EmailFormRegister>
  );
};

export default CreateAccount;