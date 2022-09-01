import { Formik } from "formik";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView
} from "react-native";
import CustomButton from "../../components/CustomButton";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import apiServices from "../../services/apiServices";
import { Dimensions } from "react-native";


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function ScrappingAction() {
    const route = useRoute();
    let scannedData = route.params.scannedData;
    console.log("Habiba",scannedData);
    const navigation = useNavigation();
    const acceptScrapping = async () => {
        const role = await AsyncStorage.getItem("userRole");
        if (role == "headEngineer") {
            console.log(role)
            console.log("Accept")
            await apiServices.headConfirm(scannedData);
            navigation.navigate("Home", { user: role });
        }
        else if ( role == "admin") {
            console.log(role)
            console.log("Accept")
            await apiServices.adminConfirm(scannedData);
         navigation.navigate("Home", { user: role });
        }
        
      };
      const rejectScrapping = async () => {
        const role = await AsyncStorage.getItem("userRole");
        if (role == "headEngineer") {
            console.log(role)
            console.log("Reject")
            navigation.navigate("Home", { user: role });
        }
        else if ( role == "admin") {
            console.log(role)
            console.log("Reject")
         navigation.navigate("Home", { user: role });
        }
        
      };
      const seeDetails = () => {
        navigation.navigate("Display", { scannedData });
      }
    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <Text style={styles.header}>Choose an action for</Text>
                <Text style={styles.header2}>this device</Text>
            </View>
             <View style={styles.lower}>
             <View style={styles.button}>
                <CustomButton title={"See Device Details"} clickHandle={seeDetails} />
                </View>
                <Text style={styles.title}>Do you want to scrap this device?</Text>
                <View style={{flexDirection: "row", justifyContent:"space-evenly"}}>
                <CustomButton title={"Confirm"} clickHandle={acceptScrapping} />
                <CustomButton title={"Reject"} clickHandle={rejectScrapping} />
                </View>
            </View>
                
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1AB07A",
    },
    upper: {
        height: 0.3 * height,
        backgroundColor: "#1AB07A",
    }, 
    header: {
        width: width,
        height: 46,
        fontWeight: "bold",
        fontSize: 35,
        lineHeight: 42,
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: 65
    },
    header2 : {
        width: width,
        height: 46,
        fontWeight: "bold",
        fontSize: 35,
        lineHeight: 42,
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: 5
    },
    title: {
        width: width,
        height: 46,
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 42,
        textAlign: "center",
        marginTop: 20
    },
    lower: {
        height: 0.7 * height,
        backgroundColor: "#FFFFFF",
        borderRadius: 15
        
    },
    text: {
        fontSize: 24,
        fontWeight: "normal",
        color: "#000000",
        marginLeft: 10
    },
    checkbox: {
        backgroundColor: "#1AB07A"
    },
    Input: {
        height: 85,
    width: 350,
    margin: 12,
    borderRadius: 20,
    borderColor: "#6C6868",
    borderWidth: 1,
    padding: 10,
    },
    button: {
        margin: 0
    }
});
