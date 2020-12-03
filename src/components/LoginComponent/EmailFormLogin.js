import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';
import { setToken } from '../../api/token';

const EmailFormLogin = ({ buttonText, onSubmit, children, onAuthentication }) => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
      onAuthentication();

      /*onSubmit(username, password)
        .then(async (res) => {
            await setToken(res.token);
            onAuthentication();

        })
        .catch((res) => setErrorMessage(res.error));*/
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder = "Username"
        style={styles.input}
        onChangeText={(text) => onChangeUsername(text)}
        value={username}
      />
      <TextInput
        placeholder = "Password"
        style={styles.input}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title={buttonText} onPress={submit} />
      {children}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default EmailFormLogin;