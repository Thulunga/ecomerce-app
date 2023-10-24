import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./src/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from "./src/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { dokhonaAuth } from "./FirebaseCofig";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Dashboard" component={Dashboard} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    onAuthStateChanged(dokhonaAuth, (user) => {
      user ? setLoggedIn(true): setLoggedIn(false);
    });
  }, []);
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          {loggedIn ? (
            <Stack.Screen name="Inside" component={InsideLayout} />
          ) : (
            <>
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </>
          )}

          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
