import React from "react";
import { Portal } from "react-native-paper";
import { View, Text, Dimensions, Animated, StyleSheet } from "react-native";

const bottomSheetHeight = Dimensions.get("window").height * 0.5;
const deviceWidth = Dimensions.get("window").width;

const BottomSheet = () => {
  const bottom = React.useRef(new Animated.Value(0)).current;

  return (
    <Portal>
      <Animated.View
        style={[
          styles.root,
          {
            height: bottomSheetHeight,
            bottom: 0,
            shadowOffset: {
              height: -30,
            },
          },
          styles.common,
        ]}
      >
        <View
          style={[
            styles.header,
            styles.common,
            {
              shadowOffset: {
                height: 3,
              },
            },
          ]}
        ></View>
      </Animated.View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "red",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    overflow: "hidden",
  },
  header: {
    height: 33,
    backgroundColor: "#fff",
  },
  common: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default BottomSheet;
