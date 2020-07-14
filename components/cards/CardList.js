import React from "react";
import { View, StyleSheet, Text } from "react-native";
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
    } else {
      const items = _.chunk(data, 2);
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
    return (
      <ScrollView>
        <CardRow style={styles.row} data={props.element} />
      </ScrollView>
    );
  } else {
    return <Text>No Item Found</Text>;
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
    width: "40%",
    marginHorizontal: "1.5%",
    backgroundColor: colors.primary,
  },
});
export default CardList;
