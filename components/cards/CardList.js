import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import Card from "./Card";
import { colors } from "../../constants/colors";
import _ from "lodash";
import { ScrollView } from "react-native-gesture-handler";
const CardList = (props, style) => {
  const CardRow = ({ data }) => {
    if (data.length === 0) {
      return <></>;
    } else if (data.length === 1) {
      return (
        <View style={styles.container} {...style}>
          <Card style={styles.card}>{data[0]}</Card>
        </View>
      );
    } else if (data.length === 2) {
      return (
        <View style={styles.container} {...style}>
          <Card style={styles.card}>{data[0]}</Card>
          <Card style={styles.card}>{data[1]}</Card>
        </View>
      );
    } else if (data.length === 3) {
      return (
        <View style={styles.container} {...style}>
          <Card style={styles.card}>{data[0]}</Card>
          <Card style={styles.card}>{data[1]}</Card>
          <Card style={styles.card}>{data[2]}</Card>
        </View>
      );
    } else {
      const items = _.chunk(data, 3);
      return (
        <View {...style}>
          {items.map((el, i) => (
            <CardRow style={styles.row} data={el} key={i} />
          ))}
        </View>
      );
    }
  };
  if (_.isArray(props.element)) {
    if (props.element.length > 0)
      return (
        <ScrollView>
          <CardRow style={styles.row} data={props.element} />
        </ScrollView>
      );
    else {
      return <Text> Sorry no items Found !! </Text>;
    }
  } else {
    return (
      <View style={{ ...props.style, justifyContent: "center" }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "column",
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    width: "30%",
    marginHorizontal: "1.5%",
    backgroundColor: colors.white,
  },
});
export default CardList;
