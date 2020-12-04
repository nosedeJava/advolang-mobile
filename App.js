import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./src/components/DrawerComponent/Menu";
import {IconButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./src/components/LoginComponent/LoginScreen";

export default function App() {

    const Stack = createStackNavigator();

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const handleSignIn = () => {
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