import { Formik } from "formik";
import { StyleSheet, Text, TextInput, View, Keyboard, KeyboardAvoidingView } from "react-native";
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

export default function PPM_Create() {
    const navigation = useNavigation();

    const route = useRoute();
    let id = route.params.params;
    
    // var size = Object.keys(route.params).length;
    
    // let id =""
    // for (let index = 0; index < size; index++) {
    //    id =  id + route.params[index];
      
    // }
    console.log("ppm",id);

    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    
    return(
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.maincontainer}>
            <View style={styles.upper}>
                <Text style={styles.header}>Create PPM Log File</Text>
            </View>
             <View style={styles.lower}>
             <Formik
        initialValues={{ operation: "", visit_date: "" }}
        onSubmit={async (values) => {
          const auth = await SecureStore.getItemAsync("user");
          const status = await AsyncStorage.getItem("isLoggedIn");
          const role = await AsyncStorage.getItem("userRole");
          console.log(values);
          if (auth) {
            await apiServices.create_PPM_PDF(id , values);
            navigation.navigate("Home", { user: role });
          }
        }}
      >
        {({ handleChange,handleSubmit, values }) => (
         
          <View>
            <TextInput
              onSubmitEditing={() => Keyboard.dismiss()}
              // textAlign={'center'}
              style={styles.Input}
              placeholder="Please Describe The PPM Opertaion "
              // placeholderTextColor={"#878787"}
              multiline={true}
              textAlignVertical={"top"}
              onChangeText={handleChange("operation")}
              value={values.operation}
            />
            <TextInput
              style={styles.Input2}
              keyboardType={"numbers-and-punctuation"}
              // textAlign={'center'}
              placeholder="Visit Date"
              onChangeText={handleChange("visit_date")}
              // placeholderTextColor={"#878787"}
              value={values.visit_date}
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
 

    Input: {
    height: 150,
    width: 0.97* width,
    margin: "2%",
    borderRadius: 20,
    borderColor: "#6C6868",
    borderWidth: 1,
    padding: 10,
    
    },

    Input2: {
      height: 50,
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
      margin: "3%",
      borderRadius: 20,
      borderColor: "#6C6868",
      borderWidth: 1,
      padding: 10,
    }
})