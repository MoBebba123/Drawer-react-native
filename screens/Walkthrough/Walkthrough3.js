import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { images, SIZES } from "../../constants";
const Walkthrough3 = () => {
  return (
    <View style={styles.container}>
      <Image source={images.walkthrough_01_03} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 20,
    height: "50%",
    width: SIZES.width - 50,
  },
});
export default Walkthrough3;
