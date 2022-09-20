import React from "react";
import { Image } from "react-native";
import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Forminput } from "../../components";
import {
  COLORS,
  constants,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Animated } from "react-native";
import Dots from "../../components/Dots";
import BottomSheet from "../../components/BottomSheet";

const data = [
  {
    id: 1,
    title: "title1",
    desc: "desc1",
    image: images.walkthrough_01_01,
  },
  {
    id: 2,
    title: "title2",
    desc: "desc2",
    image: images.walkthrough_01_05,
  },
  {
    id: 3,
    title: "title3",
    desc: "desc3",
    image: images.walkthrough_01_06,
  },
  {
    id: 4,
    title: "title4",
    desc: "desc4",
    image: images.walkthrough_01_04,
  },
  {
    id: 5,
    title: "title5",
    desc: "desc5",
    image: images.walkthrough_01_02,
  },
  {
    id: 6,
    title: "title6",
    desc: "desc6",
    image: images.walkthrough_02_04,
  },
];

const Home = () => {
  const [show, setShow] = React.useState(false);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const toggleBottomSheet = () => {
    setShow((prev) => !prev);
  };
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Forminput
          containerStyle={{
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            width: 320,
            backgroundColor: COLORS.error,
          }}
          inputContainerStyle={{}}
          placeholder="Search"
          prependComponent={
            <TouchableOpacity onPress={toggleBottomSheet}>
              <Image
                source={icons.search}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: SIZES.base,
                }}
              />
            </TouchableOpacity>
          }
        />
        <View
          style={{
            marginTop: SIZES.radius,
            justifyContent: "center",
            height: 55,
            width: 55,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGrey,
          }}
        >
          <MaterialIcons name="filter-vintage" size={24} color="black" />
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Animated.FlatList
          style={{ width: SIZES.width }}
          data={constants.bannerImages}
          keyExtractor={(_, index) => `banner-${index}`}
          horizontal
          // onViewableItemsChanged={onViewChangeRef.current}
          snapToInterval={SIZES.width}
          decelerationRate="normal"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: SIZES.width,
                  marginBottom: 10,
                }}
              >
                <Image
                  source={item}
                  style={{
                    height: 150,
                    borderRadius: SIZES.radius,
                    width: SIZES.width * 0.92,
                    resizeMode: "contain",
                  }}
                />
              </View>
            );
          }}
        />
        <Dots scrollX={scrollX} />
      </View>

      {
        // CATEGORY
      }
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
        }}
      >
        All categories
      </Text>

      <FlatList
        decelerationRate="fast"
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        listKey="Slider1"
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity>
              <ImageBackground
                borderRadius={12}
                source={item.image}
                style={styles.flatItem}
                key={index}
              ></ImageBackground>
              <Text> {item.title} </Text>
            </TouchableOpacity>
          );
        }}
      />
      {/* <BottomSheet
        show={show}
        toggleBottomSheet={toggleBottomSheet}
      ></BottomSheet> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: SIZES.padding / 2,
  },
  text: {
    ...FONTS.h2,
    fontSize: SIZES.h1,
    fontWeight: "bold",
  },
  flatList: {
    marginVertical: 20,
  },
  flatItem: {
    width: SIZES.width / 3,
    marginEnd: 20,

    height: 200,
  },
});

export default Home;
