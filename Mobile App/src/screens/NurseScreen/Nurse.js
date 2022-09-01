import { Formik } from "formik";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from "react-native";
import CheckBox from 'expo-checkbox';
import React, {useState} from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import apiServices from "../../services/apiServices";



var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function Nurse() {
  const route = useRoute();
  let device = route.params.scannedData;
    const navigation = useNavigation();
    const [idState, setIdState] = useState("");
    const [errorState, setErrorState] = useState("");
    return(
      <KeyboardAvoidingView
      style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.maincontainer}>
            <View style={styles.upper}>
                <Text style={styles.header}>Malfunction Report</Text>
            </View>
             <View style={styles.lower}>
             <Formik
        initialValues={{ error_msg: "", other_notes: "" }}
        onSubmit={async (values) => {
          const auth = await SecureStore.getItemAsync("user");
          const status = await AsyncStorage.getItem("isLoggedIn");
          const role = await AsyncStorage.getItem("userRole");
          console.log(values);
          if (values.error_msg != "") {
          if (auth) {
            await apiServices.requestEngineer(device, values);
            navigation.navigate("Home", { user: role });
          }
        }
        else {
          setErrorState("Please Enter The Error Message!")
        }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <Text style={styles.error}>{errorState}</Text>
            <TextInput
              style={styles.Input}
              placeholder="Enter Error Message"
              onChangeText={handleChange("error_msg")}
              onBlur={handleBlur("error_msg")}
              value={values.error_msg}
            />
            <TextInput
              style={styles.Input}
              placeholder="Other Comments"
              onChangeText={handleChange("other_notes")}
              onBlur={handleBlur("other_notes")}
              value={values.other_notes}
            />
            <CustomButton title={"Submit"} clickHandle={handleSubmit} />
          </View>
        )}
      </Formik>
            </View>
                
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer: {
    backgroundColor: "#1AB07A",
    flex: 1,
    justifyContent: "space-around",
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
        marginTop: 75
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
    error: {
      color: "#FF0000",
      textAlign: "center",
      marginTop: 10,
      marginBottom: 10,
      fontSize: 15
    },
    checkbox: {
        backgroundColor: "#1AB07A"
    },
    Input: {
        height: 85,
        width: 0.97* width,
        margin: "2%",
    borderRadius: 20,
    borderColor: "#6C6868",
    borderWidth: 1,
    padding: 10,
    },
    Id: {
      height: 55,
      width: 350,
      margin: 12,
      borderRadius: 20,
      borderColor: "#6C6868",
      borderWidth: 1,
      padding: 10,
    }
})