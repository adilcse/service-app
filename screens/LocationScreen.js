import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { SearchBar, Icon } from "react-native-elements";
const LocationScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const MyLocation = () => {
    return (
      <Icon
        name="location-on"
        size={50}
        color={colors.grey}
        onPress={() => {
          setSearch("Rourkela");
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchField}>
        <SearchBar
          searchIcon={MyLocation}
          placeholder="Enter your Location..."
          onChangeText={setSearch}
          value={search}
          containerStyle={{
            backgroundColor: colors.white,
          }}
          inputContainerStyle={{
            backgroundColor: colors.white,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  searchField: {
    flex: 1,
  },
});
export default LocationScreen;
