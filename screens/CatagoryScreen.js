import React, { useState } from "react";
import { View, Text } from "react-native";
import InfoCard from "../components/cards/InfoCard";
const CatagoryScreen = (props) => {
  const catagory = props.route.key;
  return (
    <View>
      <InfoCard name={catagory} />
    </View>
  );
};
export default CatagoryScreen;
