import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
const InfoCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}></View>
      <View style={styles.data}>
        <Text style={{ fontSize: 30, textTransform: "capitalize" }}>
          {props.name}
        </Text>
        <Text>catagory: {props.name}</Text>
        <Text>address: {props.name}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 100,
    backgroundColor: colors.primary,
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: "20%",
    borderRadius: 60,
    height: "100%",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  data: {
    flexDirection: "column",
    padding: 15,
  },
});
export default InfoCard;
