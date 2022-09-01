import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AuthService from "../services/AuthService";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {
  unfollowMasterID,
  updateFollowersList,
  deleteFollowMaster,
} from "native-notify";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function NavHeader() {
  const navigation = useNavigation();
  const [role, setRole] = useState("")
  const notificatio_history = () => {
    console.log("notificatio_history");
    navigation.navigate("Notification_History");
  };
  const roleHandle = async () => {
    let user_role = await AsyncStorage.getItem("userRole")
    setRole(user_role) 
  }
  const logoutHandle = async () => {
    console.log("logout");
    await AuthService.logOut();
    const userID = await AsyncStorage.getItem("userID");
    console.log("user", userID);
    unfollowMasterID("1", userID, 2779, "ikLhGabz3FssyeSUSNHq01");
    //updateFollowersList("1", userID, 2779, "ikLhGabz3FssyeSUSNHq01");
    //deleteFollowMaster(2779, "ikLhGabz3FssyeSUSNHq01", "1");
    navigation.navigate("login");
  };
  useEffect(() => {
    roleHandle()
  })
  return (
    <View style={styles.header}>
      { (role == "nurse") ? 
      <MaterialIcons
      name="logout"
      size={28}
      style={styles.icons}
      onPress={logoutHandle}
    />
    : 
    <View style={styles.header}>
    <MaterialIcons
        name="notifications-none"
        size={28}
        style={styles.icons}
        onPress={notificatio_history}
      />
      <MaterialIcons
        name="logout"
        size={28}
        style={styles.icons}
        onPress={logoutHandle}
      />
      </View>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "#1AB07A",
    justifyContent: "flex-end",
  },
  icons: {
    color: "white",
    marginLeft: "5%",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});