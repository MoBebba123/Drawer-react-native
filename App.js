import "react-native-reanimated";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Auth, Walkthrough, Welcome } from "./screens";
import Home from "./screens/Home/Main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./screens/Home/Main";
import Cart from "./screens/Home/Cart.js";
import { COLORS } from "./constants";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
const Tab = createNativeStackNavigator();

const HomeStack = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Home"}
    >
      <Tab.Screen
        name="Home"
        component={Main}
        screenOptions={{ headerShown: false }}
        initialParams={{ ...route.params }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"HomeStack"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a29bfe",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
