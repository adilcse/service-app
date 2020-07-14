import React from "react";
import { View, Button, Text } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Header from "../components/header/Header";
const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text>THis is contacts</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: colors.primary,
  },
});
export default ContactScreen;
