import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./src/components/DrawerComponent/Menu";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="menu">
        <Stack.Screen
          name="menu"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
