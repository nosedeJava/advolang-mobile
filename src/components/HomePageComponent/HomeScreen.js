import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import {setToken} from '../../api/token';
const HomeScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState('');
  let logOut = async () => {
    await setToken('');
    navigation.navigate('Login');
  };
  let handleUserLoadingError = (res) => {
    if (res.error === 401) {
      navigation.navigate('Login');
    } else {
      setErrorMessage(res.error);
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title="Log out" onPress={logOut} />
    </View>
  );
};

export default HomeScreen;