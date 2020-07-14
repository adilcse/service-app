import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { SearchBar, Icon } from "react-native-elements";
const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={setSearch}
      value={search}
      containerStyle={{
        backgroundColor: colors.white,
      }}
      inputContainerStyle={{
        backgroundColor: colors.white,
      }}
    />
  );
};
export default SearchScreen;
