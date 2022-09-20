import React from "react";
import { View, Text, Image } from "react-native";

import { TextButton } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import Signin from "./Signin";
import Signup from "./Signup";
import { useNavigation } from "@react-navigation/native";
const Auth = ({ route }) => {
  const { isSignin } = route.params;
  // States
  const [isSigninScreen, setIsSigninScreen] = React.useState(isSignin);

  const RenderAuthContainer = () => {
    if (isSignin) return <Signin />;
    else return <Signup />;
  };

  // Render

  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={images.logo}
        style={{
          alignSelf: "center",
          marginTop: SIZES.padding * 2,
          width: 50,
          height: 50,
        }}
      />
      <RenderAuthContainer />
      <TextButton
        contentContainerStyle={{
          marginTop: SIZES.radius,
          backgroundColor: null,
        }}
        labelStyle={{
          paddingRight: 50,
          color: COLORS.support3,
          ...FONTS.h4,
          alignSelf: "flex-end",
        }}
        label={isSignin ? "Dont have an account?" : "Allready have an acount?"}
        onPress={() => {
          setIsSigninScreen(isSignin);
          navigation.setParams({ isSignin: isSignin ? false : true });
        }}
      />
    </View>
  );
};

export default Auth;
