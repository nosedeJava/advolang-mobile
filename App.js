import React from "react";
import { NavigationContainer, getFocusedRouteNameFromRoute, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, StyleSheet } from 'react-native';

import Menu from "./src/components/DrawerComponent/Menu";
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

    const routePathComponents = [
        {
            path: "New Recommendation",
            component: NewRecommendation,
            show: true
        },
        {
            path: "Languages",
            component: Languages,
            show: true
        },
        {
            path: "recoms",
            component: RecommendationController,
            show: true
        },
        {
            path: "specific",
            component: SpecificRecommendation,
            show: false
        }

    ]

    const protectedElements = routePathComponents.map((route, i) =>
        <Stack.Screen key={i} name={route.path} >
            {(props) => (
                <route.component  {...props} onSignIn={handleSignIn} />
            )}
        </Stack.Screen>
    );

    return (
        <NavigationContainer>
          <Stack.Navigator >
              {isAuthenticated ? (
                  <>
                  <Stack.Screen
                      name="Home"
                      component={Menu}
                      options={{
                          title: "Welcome to Advolang!",
                          headerStyle: {
                              backgroundColor: "#2576AD",
                          },
                          headerTintColor: "#fff",
                          headerTitleAlign:'center',
                          headerTitleStyle: {
                              fontWeight: "bold",
                          },
                      }}
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