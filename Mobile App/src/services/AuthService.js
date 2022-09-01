import axios from "axios";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import authHeader from "./authHeader";

import AsyncStorage from "@react-native-async-storage/async-storage";
let jwt;

const login = (values) => {
  return axios
    .post("https://mams-api.herokuapp.com/login", {
      user: {
        email: values.email,
        password: values.password,
      },
    })
    .then(async (res) => {
      if (res.headers.authorization) {
        await SecureStore.setItemAsync("user", res.headers.authorization);
        await AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
        await AsyncStorage.setItem("userRole", res.data.data.role);
        await AsyncStorage.setItem("userID", JSON.stringify(res.data.data.id));
        console.log(res.data.data.role);
        console.log(res.data.data.id);
      }
      return res.headers.authorization;
    })
    .catch((error) => {
      console.log(error);
    });
};
const logOut = async () => {
  let token = await authHeader();
  return axios
    .delete("https://mams-api.herokuapp.com/logout", {
      headers: { Authorization: token },
    })
    .then(async (res) => {
      console.log(res.data);
      await SecureStore.deleteItemAsync("user");
      await AsyncStorage.removeItem("isLoggedIn");
      await AsyncStorage.removeItem("userRole");
      await AsyncStorage.removeItem("userID");
    })
    .catch((error) => {
      console.log(error);
    });
};
const AuthService = {
  login,
  logOut,
};
export default AuthService;
