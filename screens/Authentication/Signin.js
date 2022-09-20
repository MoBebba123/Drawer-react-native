import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

import { Shadow } from "react-native-shadow-2";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Forminput, IconButton, TextButton } from "../../components";
import { useNavigation } from "@react-navigation/native";
const Signin = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSignin = (event) => {
    event.preventDefault();
    navigation.navigate("HomeStack", {
      email: email,
    });
  };
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        height: SIZES.height * 0.55,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", width: SIZES.width }}>
        <Shadow>
          <View style={styles.authContainer}>
            <Text style={styles.text}>Sign in to Continue </Text>
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={"handled"}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              <Forminput
                containerStyle={{
                  marginTop: SIZES.radius,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                value={email}
                onChange={(text) => setEmail(text)}
                placeholder="Email"
                prependComponent={
                  <Image
                    source={icons.email}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
              />
              <Forminput
                containerStyle={{
                  marginTop: SIZES.radius,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                value={password}
                onChange={(text) => setPassword(text)}
                placeholder="Password"
                secureTextEntry={!isVisible}
                prependComponent={
                  <Image
                    source={icons.lock}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
                appendComponent={
                  <IconButton
                    iconStyle={{ tintColor: COLORS.grey }}
                    icon={!isVisible ? icons.eye_off : icons.eye}
                    onPress={() => setIsVisible(!isVisible)}
                  />
                }
              />
              <View style={{ alignItems: "flex-end" }}>
                <TextButton
                  label="Forgot Password"
                  contentContainerStyle={{
                    marginTop: SIZES.radius,
                    backgroundColor: null,
                  }}
                  labelStyle={{
                    color: COLORS.support3,
                    ...FONTS.h4,
                  }}
                  onPress={() => console.log("first")}
                />
              </View>
            </KeyboardAwareScrollView>
            <TextButton
              label="Log In"
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
              labelStyle={{
                ...FONTS.h3,
              }}
              onPress={handleSignin}
            />
          </View>
        </Shadow>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    width: SIZES.width - SIZES.padding * 2,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius,
  },
  text: {
    fontWeight: "bold",
    width: "60%",
    lineHeight: 45,
    color: COLORS.dark,
    ...FONTS.h1,
  },
});

export default Signin;
