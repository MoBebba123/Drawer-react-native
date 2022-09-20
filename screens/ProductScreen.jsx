import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.goBack()}>"""</Text>
      <Text onPress={() => navigation.goBack()}>"""""</Text>
    </SafeAreaView>
  );
};

export default ProductScreen;
