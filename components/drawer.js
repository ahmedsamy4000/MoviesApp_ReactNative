import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react';
import HomeScreen from "./HomeScreen";
import FavouritesScreen from "./FavouritesScreen";
const drawer=createDrawerNavigator();


const DrawerNavigation = () => {
    return (
        <drawer.Navigator screenOptions={
            {headerStyle:{backgroundColor:'#141719'},headerTintColor:'white'}
        }>
            <drawer.Screen name={"home"} component={HomeScreen} ></drawer.Screen>
            <drawer.Screen name={"favourites"} component={FavouritesScreen}></drawer.Screen>
        </drawer.Navigator>
    );
}

export default DrawerNavigation;