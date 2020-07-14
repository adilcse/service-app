import React from "react";
import {} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
const Drawer = createDrawerNavigator();
const DrawerNavigation = (props) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
