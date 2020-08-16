import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
const Card = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: 250,
    height: 150,
    borderRadius: 15,
    justifyContent: "center",
    backgroundColor: colors.white,
    shadowColor: "#0aaa",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default Card;
