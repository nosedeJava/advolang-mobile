import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./src/components/DrawerComponent/Menu";
import { StatusBar } from "expo-status-bar";
import {IconButton } from "react-native-paper";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#2576AD" />
      <Stack.Navigator initialRouteName="menu">
        <Stack.Screen
          name="menu"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}