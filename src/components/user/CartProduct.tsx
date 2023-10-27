import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CartProduct({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginVertical: 5,
        borderRadius: 10,
        padding: 8,
        flexDirection: "column",
      }}
    >
      <View style={{ marginBottom: 5 }}>
        <Text style={{ fontSize: 12 }}>Product title will go here.</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "column",
            zIndex: 9,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="add-circle" size={24} color="green" />
          </TouchableOpacity>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>1</Text>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-remove-circle-sharp" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Product");
            }}
          >
            <Image
              style={{
                width: 150,
                height: 150,
                resizeMode: "contain",
                margin: -25,
              }}
              source={require("../../assets/product1.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "column",
            zIndex: 9,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Feather name="heart" size={24} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons
              name="delete-forever"
              size={24}
              color="red"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
