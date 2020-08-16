import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
const CustomDrawer = () => {
  const ripple = TouchableNativeFeedback.Ripple("#adacac", false);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={styles.container}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <View
            style={[styles.containHeader, { backgroundColor: theme.pri700 }]}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{ flex: 1 }}
                source={{
                  uri:
                    "https://wie.ieee.org/wp-content/uploads/2019/06/twitter-logo-transparent-15.png",
                }}
              />
              <Text
                style={{
                  color: "#f9f9f9",
                  marginTop: "3%",
                  fontFamily: "sans-serif-condensed",
                }}
              >{`Hi user`}</Text>
            </View>
          </View>

          <View>
            <View style={{ marginTop: "2%" }}>
              <Divider style={{ backgroundColor: "#777f7c90" }} />
            </View>
          </View>
        </View>
      </ScrollView>

      <View elevation={6} style={{ backgroundColor: "#ffffff" }}>
        <TouchableNativeFeedback background={ripple}>
          <View style={styles.containDrawerOption}>
            <Text style={{ color: "black", fontFamily: "sans-serif-medium" }}>
              Logout
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback background={ripple}>
          <View style={styles.containDrawerOption}>
            <Text style={{ color: "black", fontFamily: "sans-serif-medium" }}>
              Developer
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
export default CustomDrawer;
