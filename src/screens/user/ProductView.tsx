import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function ProductView({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/product1.png")} style={styles.img} />
      <Text style={styles.title}>Nike Runner</Text>
      <Text style={styles.detail}>
        These sneakers are for the Air Max superfans. By combining elements from
        past Air Max models (like the AM90-inspired heel cup), we created a
        whole new look. The AM180 influences the textured Air unit, which
        delivers just the right amount of cushioning. Go ahead—Max out your
        look.
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("DetailsView");
        }}
      >
        <Text style={styles.btnText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    marginTop: 15,
    fontWeight: "bold",
  },
  img: { height: "50%", width: "120%", resizeMode: "contain" },
  detail: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    lineHeight: 20,
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#E24438",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
});
