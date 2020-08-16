import React from "react";
import { View, Button, Text, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>Contact info goes here</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: colors.white,
  },
  body: {
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
export default ContactScreen;
