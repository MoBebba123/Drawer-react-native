import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Shadow } from "react-native-shadow-2";
import {} from "react";
import { Forminput, IconButton, TextButton } from "../../components";
const Signup = () => {
  // Country
  const [countries, setCountries] = React.useState([]);
  const [showCountryModal, setShowCountryModal] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  React.useEffect(() => {
    // Fetch countires
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        let countryData = data.map((item) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.alpha2Code}`,
          };
        });

        setCountries(countryData);
      });
  }, []);

  const RenderCountryModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCountryModal}
      >
        <TouchableWithoutFeedback onPress={() => setShowCountryModal(false)}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.dark80,
            }}
          >
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.light,
                borderRadius: SIZES.radius,
              }}
            >
              <FlatList
                data={countries}
                keyExtractor={(item) => item.code}
                contentContainerStyle={{
                  paddingHorizontal: SIZES.padding,
                  paddingBottom: SIZES.padding,
                }}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: SIZES.radius,
                      }}
                      onPress={() => {
                        console.log(item);
                        setSelectedCountry(item);
                        setShowCountryModal(false);
                      }}
                    >
                      <Image
                        source={{ uri: item.flag }}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 30,
                        }}
                      />
                      <Text
                        style={{
                          flex: 1,
                          marginLeft: SIZES.radius,
                          ...FONTS.body3,
                        }}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        height: SIZES.height * 0.7,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", width: SIZES.width }}>
        <Shadow>
          <View style={styles.authContainer}>
            <Text style={styles.text}>Create new account</Text>
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
                value={name}
                onChange={(text) => setName(text)}
                placeholder="fullname"
                prependComponent={
                  <Image
                    source={icons.person}
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
              <Forminput
                containerStyle={{
                  marginTop: SIZES.radius,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                value={password}
                onChange={(text) => setPassword(text)}
                placeholder="Confirm Password"
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
            </KeyboardAwareScrollView>
            <TextButton
              label="Sign up"
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
              labelStyle={{
                ...FONTS.h3,
              }}
              onPress={() => console.log("first")}
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

export default Signup;
