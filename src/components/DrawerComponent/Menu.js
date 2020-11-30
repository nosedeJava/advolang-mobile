import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import NewRecommendation from "../newRecommendationComponent/NewRecommendation";

const Drawer = createDrawerNavigator();

export default function Menu() {

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={'New Recommendation'}>
                <Drawer.Screen name={'New Recommendation'} component={NewRecommendation}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
