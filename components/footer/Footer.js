import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";
import instagram from "../../assets/instagram.jpg";
const Footer = () => {
  return (
    <>
      <View
        style={{ flex: 1, height: Dimensions.get("window").width / 7 }}
      ></View>
      <View style={styles.container}>
        <View style={styles.comp1}>
          <Text style={styles.text}>Ureka at your service</Text>
        </View>
        <View style={styles.imageRow}>
          <View style={styles.image}>
            <Image
              style={{ flex: 1 }}
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/200px-Facebook_f_logo_%282019%29.svg.png",
              }}
            />
          </View>
          <View style={styles.image}>
            <Image
              style={{ flex: 1 }}
              source={{
                uri:
                  "https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png",
              }}
            />
          </View>
          <View style={styles.image}>
            <Image
              style={{ flex: 1 }}
              source={{
                uri:
                  "https://wie.ieee.org/wp-content/uploads/2019/06/twitter-logo-transparent-15.png",
              }}
            />
          </View>
        </View>
        <View style={styles.comp1}>
          <Text style={styles.text}>
            For any service related query contact us
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.secondary,
    flex: 1,
    minHeight: Dimensions.get("window").height / 6,

    bottom: 0,
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
  comp1: {
    alignItems: "center",
  },
  imageRow: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: Dimensions.get("window").width / 7,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("window").width / 7,
    height: Dimensions.get("window").width / 7,
    marginRight: 30,
  },
});
export default Footer;
