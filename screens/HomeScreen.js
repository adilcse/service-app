import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Header from "../components/header/Header";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./SearchScreen";
import LocationScreen from "./LocationScreen";
import CardList from "../components/cards/CardList";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import CatagoryScreen from "./CatagoryScreen";
const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
  const catagories = (nav) => {
    const names = ["coffee", "gift", "speaker", "tv", "wifi", "video"];
    return names.map((name) => (
      <TouchableOpacity
        style={styles.listCard}
        onPress={() => nav.navigate({ name: "Catagory", key: name })}
      >
        <Icon name={name} type="feather" color="#fff" size={80} />
        <Text style={styles.listText}>{name}</Text>
      </TouchableOpacity>
    ));
  };
  const HomeComponents = (prop) => {
    return (
      <View style={styles.container}>
        <CardList element={catagories(prop.navigation)} />
      </View>
    );
  };
  return (
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
        component={HomeComponents}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="Catagory"
        options={(prop) => ({
          headerTitle: "Catagory : " + prop.route.key,
        })}
        component={CatagoryScreen}
      />
      <Stack.Screen name="Location" component={LocationScreen} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  listCard: {
    alignItems: "center",
  },
  listText: {
    fontSize: 30,
  },
});
export default HomeScreen;
