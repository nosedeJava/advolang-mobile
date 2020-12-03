import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { NavigationContainer, getFocusedRouteNameFromRoute, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from 'react-native';
import Menu from "./src/components/DrawerComponent/Menu";
import {IconButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./src/components/LoginComponent/LoginScreen";
import NewRecommendation from "./src/components/newRecommendationComponent/NewRecommendation";
import Languages from "./src/components/LanguagesComponent/Languages";
import SpecificRecommendation from "./src/components/specificRecommendationComponent/SpecificRecommendation";
import RecommendationController from "./src/components/recommendationComponent/RecommendationController";

export default function App() {

    const Stack = createStackNavigator();

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const handleSignIn = () => {
        alert("okaa")

        setIsAuthenticated(true);
    };

    const handleSignOut = () => {
        // TODO implement real sign out mechanism
        setIsAuthenticated(false);
    };

    return (
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="#2576AD" />
          <Stack.Navigator >
              {isAuthenticated ? (
                  <>
                  <Stack.Screen
                      name="Home"
                      component={Menu}
                      options={({ navigation }) => ({
                        title: "Advolang App",
                        headerStyle: {
                          backgroundColor: "#2576AD",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                          fontWeight: "bold",
                        },
                        headerLeft: () => (
                          <IconButton
                            icon="menu"
                            color="#fff"
                            onPress={() =>
                              navigation.dispatch(DrawerActions.toggleDrawer())
                            }
                            style={{marginLeft: 15}}
                          />
                        ),
                      })}
                   />
                  </>
              ) : (
                  <>
                      <Stack.Screen name="Sign In">
                          {(props) => (
                              <LoginScreen {...props} onSignIn={handleSignIn} />
                          )}
                      </Stack.Screen>
                  </>
              )}

          </Stack.Navigator>
        </NavigationContainer>
    );
}