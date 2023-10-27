import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
} from "react-native";
import {
  AntDesign,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CartProduct from "../../components/user/CartProduct";

export default function DetailsView({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <MaterialCommunityIcons name="cart" size={24} color="black" />
          <Text
            style={{
              fontSize: 12,
              marginLeft: 8,
              color: "white",
              maxWidth: 100,
            }}
          >
            You have
            <Text style={{ color: "#E24438", fontWeight: "bold" }}>
              (n)
            </Text>{" "}
            items on your cart.
          </Text>
        </View>

        <ScrollView>
          <View style={{ flexGrow: 1, marginTop: 50 }}>
            {CartProduct({ navigation })}
            {CartProduct({ navigation })}
            {CartProduct({ navigation })}
          </View>
        </ScrollView>

        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          >
            <Text style={styles.btnText}>Go to cart</Text>
          </TouchableOpacity>
        </View>
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
          paddingVertical: 10,
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
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 150,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 200,
                duration: 200,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 200,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            {!showMenu ? (
              <MaterialCommunityIcons
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 20,
                  right: 0,
                  color: "#5359D1",
                }}
                name="cart"
                size={24}
                color="black"
              />
            ) : (
              <AntDesign
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 30,
                  right: 0,
                  color: "#5359D1",
                }}
                name="closecircleo"
                size={24}
                color="black"
              />
            )}
          </TouchableOpacity>

          <Image
            source={require("../../assets/thulunga_photo.jpg")}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 15,
              marginTop: 20,
            }}
          ></Image>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "black",
              marginTop: 15,
            }}
          >
            Thulunga Basumatary
          </Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  btn: {
    marginTop: 20,
    backgroundColor: "black",
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: "center",
  },
  btnText: {
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 2,
    color: "#fff",
  },
});
