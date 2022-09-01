import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import apiServices from "../../services/apiServices";
import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Notification_History() {
  const navigation = useNavigation();

  const [History, setHistory] = useState([]);
  console.log("H", History);
  useEffect(() => {
    apiServices.getAllNotification().then(async (response) => {
      setHistory(response.data);
    });
  }, []);

  const Press = async (scannedData) => {
    console.log("press", scannedData);
    const role = await AsyncStorage.getItem("userRole");
        if ( role == "engineer") {
            console.log(role)
            navigation.navigate("Display", { scannedData })
        }
        else if (role == "headEngineer" || "admin") {
          console.log(role)
          navigation.navigate("ScrappingAction", { scannedData });
        }
        
   
    if (role == "engineer") {
      console.log("roza", scannedData);
      console.log(role);
      navigation.navigate("Display", { scannedData });
    } else if (role == ("headEngineer" || "admin")) {
      console.log(role);
      navigation.navigate("ScrappingAction", { scannedData });
    }
  };

  const oneitem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => Press(item.medical_device_id)}>
        <View style={styles.container}>
          <View style={styles.avatarContainer}></View>

          <View style={styles.container1}>
            {/* <MaterialIcons
              name="notifications-none"
              size={28}
              style={styles.icons}
            /> */}
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.date}>{item.time_ago}</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.body}>{item.message} </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const separateItem = () => {
    return <View />;
  };
  let reverse = History.reverse();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Notifications </Text>

      <FlatList
        ItemSeparatorComponent={separateItem}
        data={reverse}
        renderItem={oneitem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1AB07A",
  },

  container1: {
    flexDirection: "row",
  },

  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1AB07A",
    marginLeft: "3%",
  },
  date: {
    marginLeft: "25%",
    marginTop: "2%",
    color: "#878787",
  },

  body: {
    left: "40%",
    top: ".3%",
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
  },
  avatarContainer: {
    backgroundColor: "#FFFF",
    borderRadius: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    color: "#1AB07A",
  },
});
