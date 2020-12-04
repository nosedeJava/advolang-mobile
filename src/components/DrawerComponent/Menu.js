import React from "react";
import NewRecommendation from "../newRecommendationComponent/NewRecommendation";
import Languages from "../LanguagesComponent/Languages";
import SpecificRecommendation from "../specificRecommendationComponent/SpecificRecommendation";
import RecommendationController from "../recommendationComponent/RecommendationController";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Settings from "../SettingsComponent/Settings";



export default function Menu() {
    const Drawer = createDrawerNavigator();

    const routePathComponents = [
        {
            path: "Overview",
            component: RecommendationController,
        },
        {
            path: "Languages",
            component: Languages,
        },
        {
            path: "New Recommendation",
            component: NewRecommendation,
        },
        {
            path: "specific",
            component: SpecificRecommendation,
        },
        {
            path: "Settings",
            component: Settings
        }
    ]

    const hiddenPaths = [
        "specific"
    ]

    const CustomDrawerContent = (props) => {
        const { state, ...rest } = props;
        const newState = { ...state };
        newState.routes = newState.routes.filter(
            (item) => !hiddenPaths.includes(item.name),
        );

        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList state={newState} {...rest} />
            </DrawerContentScrollView>
        );
    };

    const protectedElements = routePathComponents.map((route, i) =>
        <Drawer.Screen key={"item" + i}
                       name={route.path}
                       component={route.component}

        />
    );

    return (
        <Drawer.Navigator initialRouteName={"Overview"}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
            }}>
            {protectedElements}

        </Drawer.Navigator>
    );
}