import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import apiServices from "../../services/apiServices";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function DeviceScrapping() {
  const route = useRoute();
  let id = route.params.params;
  console.log("scrapping", id);
  // var size = Object.keys(route.params).length;
  // console.log(size);
  // let id =""
  // for (let index = 0; index < size; index++) {
  //    id =  id + route.params[index];

  // }
  const navigation = useNavigation();
  const [errorState, setErrorState] = useState("");

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text style={styles.header}>Request Scrapping</Text>
      </View>
      <View style={styles.lower}>
        <Formik
          initialValues={{ scrapping_reason: "" }}
          onSubmit={async (values) => {
            const auth = await SecureStore.getItemAsync("user");
            const status = await AsyncStorage.getItem("isLoggedIn");
            const role = await AsyncStorage.getItem("userRole");
            console.log(values);
            if (values.scrapping_reason != "") {
              if (auth) {
                await apiServices.requestDeviceScrapping(id, values);
                await AsyncStorage.setItem(
                  "Scrapping_Reason",
                  values.scrapping_reason
                );
                let scrapping = await AsyncStorage.getItem("Scrapping_Reason");
                console.log("Habiba", scrapping);
                navigation.navigate("Home", { user: role });
              }
            } else {
              setErrorState("Please Enter The Scrapping Reason!");
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              <Text style={styles.error}>{errorState}</Text>
              <TextInput
                style={styles.Input}
                placeholder="Enter Scrapping Reason"
                onChangeText={handleChange("scrapping_reason")}
                onBlur={handleBlur("scrapping_reason")}
                value={values.scrapping_reason}
              />
              <CustomButton title={"Submit"} clickHandle={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
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
    marginTop: 65,
  },
  header2: {
    width: width,
    height: 46,
    fontWeight: "bold",
    fontSize: 35,
    lineHeight: 42,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 5,
  },
  lower: {
    height: 0.7 * height,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: "normal",
    color: "#000000",
    marginLeft: 10,
  },
  error: {
    color: "#FF0000",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
  },
  checkbox: {
    backgroundColor: "#1AB07A",
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
});
