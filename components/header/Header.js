import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header as NativeHeader, Icon, SearchBar } from "react-native-elements";
import { colors } from "../../constants/colors";
import { TouchableOpacity } from "react-native";
const Header = (props) => {
  const MenuButton = () => {
    return (
      <Icon
        name="menu"
        color="#fff"
        onPress={props.navigation.openDrawer}
      ></Icon>
    );
  };
  const SearchButton = () => {
    return (
      <View>
        <Icon
          name="search"
          color={colors.white}
          onPress={() => props.navigation.navigate("Search")}
        />
      </View>
    );
  };
  const MyLocation = () => {
    return (
      <TouchableOpacity
        style={styles.headerLocation}
        onPress={() => props.navigation.navigate("Location")}
      >
        <Icon name="location-on" type="material" color={colors.white} />
        <Text style={styles.text}>Bisra</Text>
      </TouchableOpacity>
    );
  };
  return (
    <NativeHeader containerStyle={styles.container}>
      <MenuButton />
      <MyLocation />
      <SearchButton />
    </NativeHeader>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 5,
  },
  headerLocation: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginRight: "auto",
    marginLeft: 0,
  },
});
export default Header;
