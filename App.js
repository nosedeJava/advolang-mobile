import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/components/LoginComponent/LoginScreen';
import HomeScreen from './src/components/HomePageComponent/HomeScreen';
import CreateAccount from './src/components/SignUpComponent/CreateAccount';
import Menu from './src/components/DrawerComponent/Menu';
import {SpecificRecommendation} from './src/components/specificRecommendationComponent/SpecificRecommendation';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccount,
    Advolang: Menu,
      Specific: SpecificRecommendation
  },
  {
    // initialRouteName: 'Home',
    initialRouteName: 'Specific'
  },
);

export default createAppContainer(AppNavigator);