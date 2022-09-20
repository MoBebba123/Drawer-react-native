import { View, Text, Animated } from "react-native";
import React from "react";
import { COLORS, SIZES, constants, FONTS } from "../constants";

const Dots = ({ scrollX }) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {constants.bannerImages.map((item, index) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={index}
            style={{
              borderRadius: 5,
              marginHorizontal: 6,
              width: 10,
              height: 10,
              backgroundColor: dotColor,
            }}
          />
        );
      })}
    </View>
  );
};

export default Dots;
