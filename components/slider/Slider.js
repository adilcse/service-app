import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Card from "../cards/Card";
import images from "../../constants/images";
const Slider = (props) => {
  if (props.error) {
    return (
      <View style={styles.container}>
        <Card>
          <Text>Error</Text>
        </Card>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Card>
        <Image
          style={styles.image}
          source={{
            uri: props.element,
          }}
        />
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 10,
  },
});
export default Slider;
