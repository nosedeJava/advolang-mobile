import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateAccount from './src/screens/CreateAccount';
import Menu from './components/DrawerComponent/Menu';

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