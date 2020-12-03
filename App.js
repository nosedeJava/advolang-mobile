import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./src/components/DrawerComponent/Menu";
import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native";

export default function App() {
  const Stack = createStackNavigator();



  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#2576AD" />
      <Stack.Navigator 
        initialRouteName="menu"
      >
        <Stack.Screen
          name="menu"
          component={Menu}
          options={({navigation}) => ({
            title: "Welcome to Advolang!",
            headerStyle: {
              backgroundColor: "#2576AD",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => (
              <Button
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                title={'menu'}
              />
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
