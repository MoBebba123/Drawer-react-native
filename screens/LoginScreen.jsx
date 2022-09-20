import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column_1}>
        <Text style={{ fontSize: 25 }}>Log in</Text>
      </View>
      <View style={styles.column_2}>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "red",
  },
  column_1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  column_2: {
    flex: 1,
    backgroundColor: "red",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
export default LoginScreen;
