import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { imageBase } from "../../api/urls";
import { useSelector } from "react-redux";
const InfoCard = (props) => {
  const { serviceman } = props;
  const categories = useSelector((state) => state.categoriesReducer);
  const goToDetails = () => {
    props.navigation.navigate({
      key: serviceman.id,
      params: serviceman,
      name: "Details",
    });
  };
  const categoryName = categories.category.find(
    (el) => el.c_id == serviceman.c_id
  ).c_name;
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          style={{ flex: 1, borderRadius: 10 }}
          source={{
            uri: imageBase + serviceman.img1,
          }}
        />
      </View>
      <TouchableOpacity style={styles.data} onPress={goToDetails}>
        <Text style={{ fontSize: 25, textTransform: "capitalize" }}>
          {serviceman.name}
        </Text>
        <Text style={{ fontSize: 18 }}>catagory: {categoryName}</Text>
        <View style={styles.description}>
          <Text>Mobile: {serviceman.mobile.substr(0, 6) + "xxxx"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 120,
    backgroundColor: colors.white,
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  avatar: {
    width: "25%",
    borderRadius: 10,
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
    marginVertical: 5,
  },
  description: {
    flexDirection: "row",
    height: "50%",
    marginVertical: "2%",
    overflow: "visible",
  },
});
export default InfoCard;
