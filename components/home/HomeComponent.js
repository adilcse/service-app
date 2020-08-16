import React from "react";
import {
  View,
  ActivityIndicator,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Toast } from "../toast/Toast";
import SliderList from "../slider/SliderList";
import CardList from "../cards/CardList";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesAction } from "../../redux/actions/getCategoriesAction";
import { colors } from "../../constants/colors";
import { imageBase } from "../../api/urls";
import Footer from "../footer/Footer";
const HomeComponent = (props) => {
  const cats = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const catagories = (nav) => {
    if (!cats.loading && !cats.loaded) {
      getCategoriesAction(dispatch);
      return null;
    } else if (cats.loading) {
      return <ActivityIndicator size="large" color={colors.primary} />;
    } else {
      return cats.category.map((category) => {
        return (
          <TouchableOpacity
            key={category.c_id}
            style={styles.listCard}
            onPress={() =>
              nav.navigate({ name: "Catagory", key: category.c_id })
            }
          >
            <Image
              style={styles.image}
              source={{
                uri: imageBase + category.img1,
              }}
            />
            <View style={styles.textView}>
              <Text style={styles.listText}>{category.c_name}</Text>
            </View>
          </TouchableOpacity>
        );
      });
    }
  };
  if (cats.error) {
    Toast(cats.error.message);
  }
  return (
    <View style={styles.container}>
      {cats.error ? (
        <Text>Something went wrong</Text>
      ) : (
        <ScrollView style={styles.catagoryBody}>
          <SliderList />
          <CardList
            element={catagories(props.navigation)}
            style={{ minHeight: Dimensions.get("window").height * 0.8 }}
          />
          <Footer />
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
    height: Dimensions.get("window").height,
  },

  listCard: {
    alignItems: "center",
    overflow: "hidden",
  },
  textView: {
    flexDirection: "row",
    overflow: "hidden",
    height: 30,
    justifyContent: "center",
    marginHorizontal: "auto",
    paddingHorizontal: 10,
  },
  listText: {
    fontSize: 18,
  },
  image: {
    width: "77%",
    height: "70%",
    overflow: "hidden",
    borderRadius: 10,
  },
  catagoryBody: {
    minHeight: "80%",
    height: "75%",
  },
});
export default HomeComponent;
