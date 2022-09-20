import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Animated, Text } from "react-native";
import { TextButton } from "../../components";
import Dots from "../../components/Dots";
import { COLORS, SIZES, constants, FONTS } from "../../constants";
import Walkthrough1 from "./Walkthrough1";
import Walkthrough2 from "./Walkthrough2";
import Walkthrough3 from "./Walkthrough3";
const Walkthrough = () => {
  // Walkthrough 2
  //const [walkthrough2Animate, setWalkthrough2Animate] = React.useState(false);
  // const onViewChangeRef = React.useRef((viewableItems, changed) => {
  //   // if (viewableItems[0].index === 1) {
  //   //   setWalkthrough2Animate(true);
  //   // }
  // });
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: SIZES.width,
          justifyContent: "center",
        }}
      >
        {/* Walkthrough images  */}

        <View style={{ flex: 1, justifyContent: "center" }}>
          {index === 0 && <Walkthrough1 />}
          {index === 1 && <Walkthrough2 />}
          {index === 2 && <Walkthrough3 />}
        </View>
        <View
          style={{
            height: SIZES.height * 0.25,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h1, fontWeight: "bold" }}>{item.title}</Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              textAlign: "center",
              color: COLORS.grey,
              ...FONTS.body3,
            }}
          >
            {item.sub_title}
          </Text>
        </View>
      </View>
    );
  };
  const navigation = useNavigation();
  const RenderFooter = () => {
    return (
      <View
        style={{
          position: "relative",
          bottom: 0,
          top: 0,
          right: 0,
          height: SIZES.height * 0.2,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
        }}
      >
        <Dots scrollX={scrollX} />
        <View
          style={{
            flexDirection: "row",
            height: 55,
          }}
        >
          <TextButton
            label="Join Now"
            contentContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              color: COLORS.lightGrey,
              ...FONTS.h3,
            }}
            onPress={() =>
              navigation.navigate("Auth", {
                isSignin: false,
              })
            }
          />
          <TextButton
            label="Log In"
            contentContainerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              color: COLORS.lightGrey,
              ...FONTS.h3,
            }}
            onPress={() =>
              navigation.navigate("Auth", {
                isSignin: true,
              })
            }
          />
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}
    >
      <Animated.FlatList
        data={constants.walkthrough}
        keyExtractor={(item) => item.id}
        horizontal
        // onViewableItemsChanged={onViewChangeRef.current}
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={renderItem}
      ></Animated.FlatList>
      <RenderFooter />
    </View>
  );
};

export default Walkthrough;
