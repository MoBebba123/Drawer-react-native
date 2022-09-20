import { View, Text, StyleSheet, Image, Animated } from "react-native";
import React from "react";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import Home from "./Home";
// Tab ICons...
import home from "../../assets/home.png";
import search from "../../assets/search.png";
import notifications from "../../assets/bell.png";
import settings from "../../assets/settings.png";
import logout from "../../assets/logout.png";
// Menu
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import { SimpleLineIcons } from "@expo/vector-icons";

// Photo
import photo from "../../assets/photo.jpg";

const Main = ({ navigation }) => {
  const [currentTab, setCurrentTab] = React.useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = React.useState(false);

  // Animated Properties...

  const offsetValue = React.useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = React.useRef(new Animated.Value(1)).current;
  const closeButtonOffset = React.useRef(new Animated.Value(0)).current;
  const RenderScreen = () => {
    if (currentTab === "Home") return <Home />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start" }}>
        <Image
          source={images.avatar2}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            marginTop: 8,
          }}
        ></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          Mohamed Bebba
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              alignItems: "center",
              height: 60,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                // Do Actions Here....
                // Scaling the view...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(closeButtonOffset, {
                  // YOur Random Value...
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                setShowMenu(!showMenu);
              }}
            >
              <Image
                source={showMenu ? close : menu}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "black",
                  marginTop: 10,
                }}
              ></Image>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "black",

                marginTop: 10,
              }}
            >
              {currentTab}
            </Text>
            <SimpleLineIcons
              name="handbag"
              size={25}
              color="black"
              style={{ marginTop: 10 }}
              onPress={() => navigation.navigate("Cart")}
            />
          </View>

          <RenderScreen />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // LOG OUT ACTION
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? COLORS.primary : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? COLORS.primary : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
  menu: {
    height: SIZES.height,
    width: SIZES.width * 0.8,
    backgroundColor: "red",
    position: "absolute",
    right: 0,
    top: 0,
    translateX: SIZES.width / 0.8,
  },
  menu_open: {
    paddingVertical: 50,
    height: SIZES.height,
    width: SIZES.width * 0.8,
    position: "absolute",
    alignItems: "center",
    justifyContent: "flex-start",
    right: 0,
    top: 0,
  },
  menu_container: {
    zIndex: -1,
    height: SIZES.height,
    width: SIZES.width,
  },
  menu_container_open: {
    zIndex: 999,
    opacity: 0.8,
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: "black",
  },
});

export default Main;
