import React, { useRef, useState } from "react";
import { dokhonaAuth } from "../../FirebaseCofig";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function Dashboard({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          source={require("../assets/thulunga_photo.jpg")}
          style={{
            width: 80,
            height: 80,
            marginLeft: 5,
            borderRadius: 40,
            marginTop: 20,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 15,
            maxWidth: 150,
          }}
        >
          Thulunga Basumatary
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 35 }}>
          {TabButtons(currentTab, setCurrentTab, "Home", "")}
          {TabButtons(currentTab, setCurrentTab, "Notifications", "")}
          {TabButtons(currentTab, setCurrentTab, "Categories", "")}
          {TabButtons(currentTab, setCurrentTab, "Dokhona", "")}
        </View>

        <View>
          {TabButtons(currentTab, setCurrentTab, "Logout", "homeIcon.png")}
        </View>
      </View>
      {
        // Over lay View...
      }
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
        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
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
            <Image
              source={ showMenu ? require("../assets/closeIcon.png") : require("../assets/hamburgerIcon.png")}
              style={{
                width: 20,
                height: 20,
                marginTop: 35,
                tintColor: '#5359D1'
              }}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              paddingTop: 10,
            }}
          >
            {currentTab}
          </Text>

          <Image
            source={require("../assets/thulunga_photo.jpg")}
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
});

const TabButtons = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "Logout") {
          dokhonaAuth.signOut();
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
          paddingVertical: 5,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingRight: 10,
          paddingLeft: 15,
          borderRadius: 15,
        }}
      >
        <Image
          source={require("../assets/homeIcon.png")}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white",
          }}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 10,
            color: currentTab == title ? "#5359D1" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
