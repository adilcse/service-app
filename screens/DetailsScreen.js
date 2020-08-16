import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  Linking,
} from "react-native";
import { colors } from "../constants/colors";
import { imageBase } from "../api/urls";
import {
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import HTMLView from "react-native-htmlview";
const DetailScreen = (props) => {
  const serviceman = props.route.params;
  const [viewOnlyImage, setViewOnlyImage] = useState(false);
  const categories = useSelector((state) => state.categoriesReducer);
  const categoryName = categories.category.find(
    (el) => el.c_id == serviceman.c_id
  ).c_name;
  const makeCall = () => {
    Linking.openURL(`tel:${serviceman.mobile}`);
  };
  if (viewOnlyImage) {
    return (
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => setViewOnlyImage(false)}
      >
        <View style={styles.imageFull}>
          <Image
            style={{ flex: 1 }}
            source={{
              uri: imageBase + serviceman.img1,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  } else
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableWithoutFeedback
            style={styles.image}
            onPress={() => setViewOnlyImage(true)}
          >
            <Image
              style={{ flex: 1 }}
              source={{
                uri: imageBase + serviceman.img1,
              }}
            />
          </TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.col1}>
              <Text style={styles.head}>Name </Text>
              <Text style={styles.value}>: {serviceman.name}</Text>
            </View>
            <View style={styles.col1}>
              <Text style={styles.head}>Category </Text>
              <Text style={styles.value}>: {categoryName}</Text>
            </View>
            <HTMLView value={serviceman.descr} stylesheet={styleHtml} />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.payment} activeOpacity={0.8}>
          <Text></Text>
          <Button
            title={`Service charge ${serviceman.price} make call`}
            color={colors.button}
            onPress={makeCall}
          />
        </TouchableOpacity>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
    paddingVertical: "auto",
  },
  image: {
    flexDirection: "row",
    width: "100%",
    height: Dimensions.get("window").height / 4,
  },
  imageFull: {
    flexDirection: "row",
    flex: 1,
  },
  body: {
    flex: 1,
    marginHorizontal: "3%",
  },
  head: {
    fontSize: 24,
    width: "30%",
  },
  value: {
    fontSize: 24,
    overflow: "visible",
    maxWidth: "95%",
  },
  col1: {
    flexDirection: "row",
  },
  payment: {
    justifyContent: "center",
    marginVertical: "auto",
  },
});

const styleHtml = StyleSheet.create({
  p: {
    fontSize: 20,
  },
  li: {
    fontSize: 20,
  },
});
export default DetailScreen;
