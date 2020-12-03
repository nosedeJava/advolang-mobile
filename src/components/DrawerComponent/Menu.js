import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NewRecommendation from "../newRecommendationComponent/NewRecommendation";
import Languages from "../LanguagesComponent/Languages";

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
      <Drawer.Navigator initialRouteName={"New Recommendation"}>
        <Drawer.Screen
          name={"New Recommendation"}
          component={NewRecommendation}
        />
        <Drawer.Screen name={"Languages"} component={Languages} />
      </Drawer.Navigator>
  );
}