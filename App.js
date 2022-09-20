import "react-native-reanimated";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Auth, Walkthrough, Welcome } from "./screens";
import Main from "./screens/Home/Main";

const Stack = createNativeStackNavigator();

const HomeStack = ({ route }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Home"}
    >
      <Stack.Screen
        name="Home"
        component={Main}
        screenOptions={{ headerShown: false }}
        initialParams={{ ...route.params }}
      />
    </Stack.Navigator>
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
