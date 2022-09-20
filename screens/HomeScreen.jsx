import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const cards = [
  {
    id: 1,
    title: "first title",
    description: "first description",
    price: 20,
  },
  {
    id: 2,
    title: "first title",
    description: "first description",
    price: 20,
  },
  {
    id: 3,
    title: "first title",
    description: "first description",
    price: 20,
  },
  {
    id: 4,
    title: "first title",
    description: "first description",
    price: 20,
  },
  {
    id: 5,
    title: "first title",
    description: "first description",
    price: 20,
  },
  {
    id: 6,
    title: "first title",
    description: "first description",
    price: 20,
  },
  {
    id: 7,
    title: "first title",
    description: "first description",
    price: 20,
  },
  {
    id: 8,
    title: "first title",
    description: "first description",
    price: 20,
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductScreen from "./ProductScreen";
import LoginScreen from "./LoginScreen";

//const Drawer = createDrawerNavigator();

// const DrawerNav = () => {
//   <Drawer.Navigator
//     initialRouteName={"Home"}
//     screenOptions={{ headerShown: false }}
//   >
//     <Drawer.Screen name="Home" component={HomeScreen} />
//     <Drawer.Screen name="Product" component={ProductScreen} />
//     <Drawer.Screen name="Login" component={LoginScreen} />
//   </Drawer.Navigator>;
// };
const HomeScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <Text style={{ fontSize: 30, margin: 20 }}> Discover </Text>
          <Entypo
            name="menu"
            size={30}
            color="black"
            style={{ marginRight: 20 }}
            onPress={() => navigation.openDrawer()}
          />
        </View>
        <FlatList
          style={styles.flat}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
        <ScrollView>
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={styles.card}
              onPress={() => {
                navigation.navigate("Product", {
                  id: card.id,
                  user: "test",
                });
              }}
            >
              <Text> {card.title} </Text>
              <Text> {card.description} </Text>
              <Text> {card.price} $ </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#dcdde1",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#7f8fa6",
    display: "flex",
    overflow: "scroll",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    maxHeight: 100,
  },
  item: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 150,
    backgroundColor: "tomato",
  },
  flat: {
    height: 250,
  },
});

export default HomeScreen;
