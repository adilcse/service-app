import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import InfoCard from "../components/cards/InfoCard";
import { colors } from "../constants/colors";
import getServiceman from "../api/getServicemen";
const CatagoryScreen = (props) => {
  const categoryId = props.route.key;
  const [servicemen, setServicemen] = useState(false);
  if (!Array.isArray(servicemen)) {
    getServiceman().then((result) => {
      setServicemen(result.filter((person) => person.c_id === categoryId));
    });
    return <ActivityIndicator size="large" color={colors.primary} />;
  } else if (servicemen.length > 0) {
    return (
      <>
        {servicemen.map((serviceman) => {
          return (
            <View key={serviceman.id}>
              <InfoCard serviceman={serviceman} {...props} />
            </View>
          );
        })}
      </>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={{ flex: 1 }}
            source={{
              uri:
                "https://image.freepik.com/free-vector/error-404-found-glitch-effect_8024-4.jpg",
            }}
          />
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("window").width * 0.8,

    width: Dimensions.get("window").width * 0.8,
  },
});
export default CatagoryScreen;
