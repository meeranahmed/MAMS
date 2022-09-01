import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../../components/IconButton";
import CustomIcon from "../../components/CustomIcon";
import { useRoute } from "@react-navigation/native";
import { getPushDataObject } from "native-notify";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Home({ route }) {
  let pushDataObject = getPushDataObject();
  const navigation = useNavigation();
  useEffect(() => {
    console.log(pushDataObject.screenName);
    console.log(pushDataObject.id);
    let scannedData = pushDataObject.id;
    if (Object.keys(pushDataObject).length !== 0) {
      console.log(scannedData);
      navigation.navigate(pushDataObject.screenName, { scannedData });
    }
  });

  const IsLoggedIn = async () => {
    const isloggedIn = await AsyncStorage.getItem("isLoggedIn");
    return isloggedIn;
  };
  const role = route.params.user;
  console.log(role);

  const QrPress = () => {
    navigation.navigate("Scanner", { user: role });
  };



  const dashPress = () => {
    navigation.navigate("Statistics");
  };

  const addPress = () => {
    navigation.navigate("AddDevice", { user: role });
  };
  const alarmPress = () => {
    navigation.navigate("Alarm");
  }
  IsLoggedIn();
  return (
    <View style={styles.container}>
      <View style={styles.tContainer}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.pContainer}></View>
      <View style={styles.main}>
        { (role == "engineer") ?
          <View style={styles.iconButtonView}>
            <IconButton i={"qr"} onpress={QrPress} text={"Scan QR"}/>
            <IconButton i={"add"} onpress={addPress} text={"Add Device"} />
          </View>
         : ( role == "nurse") ?
          <View style={[styles.iconButtonView, { justifyContent: "center" }]}>
            <IconButton i={"qr"} onpress={QrPress} text={"Scan QR"} />
          </View>
          : (role == "headEngineer") ? 
          <View style={styles.iconButtonView2}>
            <CustomIcon i={"qr"} onpress={QrPress} text={"Scan QR"} />
            <CustomIcon i={"add"} onpress={addPress} text={"Add Device"} />
            <CustomIcon i={"alarm"} onpress={alarmPress} text={"Alarm"} />
          </View>
          :
          <View style={styles.iconButtonView}>
            <IconButton i={"dashboard"} onpress={dashPress} text={"Dashboard"} />
            <IconButton i={"qr"} onpress={QrPress} text={"Scan QR"} />
            
          </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#1AB07A",
  },

  iconButtonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center",
  },
  iconButtonView2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 100,
    alignItems: "center",
  },
  title: {
    // marginTop:50,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  tContainer: {
    height: "10%",
    width: "100%",
  },
  pContainer: {
    height: "15%",
    width: "100%",
  },

  main: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "70%",
    padding: "7%",
  },
});
