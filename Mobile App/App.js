import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/LoginScreen/login";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/stackNavigator";
import registerNNPushToken, { getPushDataObject } from "native-notify";
// import { getPushDataObject } from "native-notify";
export default function App() {
  registerNNPushToken(3128, "I5aq6DGiDw4tgB8ZGbycuP");
  let pushDataObject = getPushDataObject();
  useEffect(() => {
    console.log(pushDataObject);
  });

  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
