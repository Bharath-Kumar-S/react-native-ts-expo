import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground,StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";


export default function App() {

  return(
    <NavigationContainer >
      <StatusBar style="dark" hidden />
      <AppNavigator />
    </NavigationContainer>
  
)
};
