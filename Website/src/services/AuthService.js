import axios from "axios";
import authHeader from "./authHeader";

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
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("userRole", res.data.data.role);
        localStorage.setItem("userID", JSON.stringify(res.data.data.id));
        localStorage.setItem("userToken", res.headers.authorization);
        console.log(res.data.data.role);
        console.log(res.headers.authorization);
      }
      return res.headers.authorization;
    })
    .catch((error) => {
      console.log(error);
    });
};

const signUp = (values) => {
  console.log(values);
  return axios
    .post("https://mams-api.herokuapp.com/signup", {
      user: {
        email: values.email,
        password: values.password,
        role: values.role,
      },
    })
    .then((res) => {
      console.log(res);
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
      localStorage.clear();
    })
    .catch((error) => {
      console.log(error);
    });
};

const AuthServices = {
  login,
  logOut,
  signUp,
};
export default AuthServices;
