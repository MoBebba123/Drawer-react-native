import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { SIZES, images } from "../../constants";

const Walkthrough2 = () => {
  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
      }}
    >
      <Image
        source={images.walkthrough_02_01}
        style={{
          ...styles.image,
          top: "35%",
          left: "35%",
          width: 186,
          height: 161,
        }}
      />
      <Image
        source={images.walkthrough_02_02}
        style={{
          ...styles.image,
          top: "50%",
          left: "50%",
          width: 186,
          height: 161,
        }}
      />
      <Image
        source={images.walkthrough_02_03}
        style={{
          ...styles.image,
          top: "30%",
          zIndex: -1,
          left: "25%",
          width: 186,
          height: 161,
        }}
      />
      <Image
        source={images.walkthrough_02_04}
        style={{
          ...styles.image,

          top: "20%",
          zIndex: -2,
          left: "10%",
          width: 186,
          height: 161,
        }}
      />
      {/* <Image source={images.walkthrough_02_05} style={styles.image} />
      <Image source={images.walkthrough_02_06} style={styles.image} />
      <Image source={images.walkthrough_02_07} style={styles.image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 86,
    height: 112,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});
export default Walkthrough2;
