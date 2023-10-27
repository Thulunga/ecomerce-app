import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, LoginScreen, RegisterScreen, ResetPasswordScreen, StartScreen } from "../src/screens";
import { dokhonaAuth } from "../FirebaseCofig";
import HomeScreen from "../src/screens/user/HomeScreen";
import CartScreen from "../src/screens/user/CartScreen";
import ProductView from "../src/screens/user/ProductView";
import DetailsView from "../src/screens/user/DetailsView";
import CartProduct from "../src/components/user/CartProduct";

const LogoutStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function InsideLayout() {
    return (
      <Stack.Navigator
      initialRouteName="Product"
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Product" component={ProductView} />
        <Stack.Screen name="DetailsView" component={DetailsView} />
      </Stack.Navigator>
    );
  }
  

const Routes = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(dokhonaAuth, (user) => {
      user ? setLoggedIn(true) : setLoggedIn(false);
    });
  }, []);
  return (
    <NavigationContainer>
      <LogoutStack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        {loggedIn ? (
          <LogoutStack.Screen name="Inside" component={InsideLayout} />
        ) : (
          <>
            <LogoutStack.Screen name="StartScreen" component={StartScreen} />
            <LogoutStack.Screen name="LoginScreen" component={LoginScreen} />
            <LogoutStack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )}

        <LogoutStack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </LogoutStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
