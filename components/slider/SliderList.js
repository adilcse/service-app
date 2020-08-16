import React, { useReducer, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import Slider from "./Slider";
import { useDispatch, useSelector } from "react-redux";
import SliderComponent from "./SliderComponent";
import { imageBase } from "../../api/urls";
import { colors } from "../../constants/colors";
const SliderList = (props) => {
  const dispatch = useDispatch();
  const slider = useSelector((state) => state.sliderReducer);
  if (!slider.loaded && !slider.loading) {
    SliderComponent(dispatch);
  }

  if (slider.loaded) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {slider.sliders.map((el) => (
            <Slider element={imageBase + el.img1} key={el.id} />
          ))}
        </ScrollView>
      </View>
    );
  } else if (slider.loading) {
    return <></>;
  } else {
    return (
      <View>
        <Slider error={true} />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
});
export default SliderList;
