import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Keyboard,
  Pressable,
  TouchableWithoutFeedback,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import CustomButton from "./CustomButton";
import * as Yup from "yup";
import AuthService from "../services/AuthService";
import {
  registerIndieID,
  registerFollowMasterID,
  registerFollowerID,
} from "native-notify";
const validationSchema = Yup.object().shape({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function LoginForm() {
  const [wrong, setwrong] = useState("");
  let [count, setcount] = useState(0);
  let [disabled, setdisable] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          console.log(values);
          //AuthService.logOut();
          await AuthService.login(values);
          const auth = await SecureStore.getItemAsync("user");
          const status = await AsyncStorage.getItem("isLoggedIn");
          const role = await AsyncStorage.getItem("userRole");
          const userID = await AsyncStorage.getItem("userID");
          console.log("token", auth);
          console.log("logged?", status);
          console.log("Role", role);
          console.log("userID", userID);
          if (auth) {
            navigation.navigate("Home", { user: role });
            setwrong("")
            registerIndieID(userID, 3220, "otbSkQxLZhTtXBD0xW6CXl");
            if (role == "engineer") {
              registerFollowMasterID("2", 3128, "I5aq6DGiDw4tgB8ZGbycuP");
              registerFollowerID("2", userID, 3128, "I5aq6DGiDw4tgB8ZGbycuP");
            }
          } else {
            console.log("please enter");
            setcount(count + 1);
            console.log(count);
            if (count < 2) {
              setwrong("Incorrect Email or Password");
            } else {
              setwrong("3 Wrong Trials try after 2 min");
              setdisable(false);
              setTimeout(() => {
                setdisable(true);
              }, 10000);
              setcount(0);
              values.email = "";
              values.password = "";
            }
          }
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Image source={require("../assets/login.png")} />
            <View className="unvalid-msg-cont">
              <Text style={styles.unvalidmsg}>{wrong}</Text>
            </View>
            <TextInput
              style={styles.Input}
              placeholder="Example@gmail.com"
              placeholderTextColor={"#878787"}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              editable={disabled}
            />
            {errors.email ? (
              <Text style={{ fontSize: 15, color: "red" }}>{errors.email}</Text>
            ) : (
              <></>
            )}
            <TextInput
              style={styles.Input}
              placeholder="Password"
              placeholderTextColor={"#878787"}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
              editable={disabled}
            />
            {errors.password ? (
              <Text style={{ fontSize: 15, color: "red" }}>
                {errors.password}
              </Text>
            ) : (
              <></>
            )}

            <CustomButton title={"Login"} clickHandle={handleSubmit} />
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
  },
  Input: {
    height: 55,
    width: 350,
    margin: 12,
    borderRadius: 50,
    borderColor: "#6C6868",
    borderWidth: 1,
    padding: 10,
  },
  unvalidmsg: {
    color: "red",
  },
});
