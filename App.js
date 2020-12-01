import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/components/LoginComponent/LoginScreen';
import HomeScreen from './src/components/HomePageComponent/HomeScreen';
import CreateAccount from './src/components/SignUpComponent/CreateAccount';
import Menu from './src/components/DrawerComponent/Menu';



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccount,
    Advolang: Menu
  },
  {
    // initialRouteName: 'Home',
    initialRouteName: 'Advolang'
  },
);

export default createAppContainer(AppNavigator);