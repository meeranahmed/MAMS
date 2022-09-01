import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import TextField from "../../components/TextField";
import CustomButton from "../../components/CustomButton";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  const navigation = useNavigation();
  const clickHandler = () => {
    console.log("login");
    navigation.navigate("EngHome");
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Text style={styles.text}>Login</Text>
      <View>
        <LoginForm></LoginForm>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
