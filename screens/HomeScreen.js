import React from "react";
import { colors } from "../constants/colors";
import Header from "../components/header/Header";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./SearchScreen";
import LocationScreen from "./LocationScreen";
import CatagoryScreen from "./CatagoryScreen";
import DetailScreen from "./DetailsScreen";
import { useSelector } from "react-redux";

import HomeComponent from "../components/home/HomeComponent";
const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
  const cats = useSelector((state) => state.categoriesReducer);
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{ header: (props) => <Header {...props} /> }}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={(prop) => {
            return {
              title: prop.route.params.name,
            };
          }}
        />
        <Stack.Screen
          name="Catagory"
          options={(prop) => ({
            headerTitle: cats.category.find((el) => el.c_id === prop.route.key)
              .c_name,
          })}
          component={CatagoryScreen}
        />
        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeScreen;
