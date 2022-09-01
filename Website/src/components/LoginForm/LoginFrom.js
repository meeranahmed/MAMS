import React from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoginScreen } from "../../pages/Login/LoginScreen";
import DashboardScreen from "../../pages/Dashboard/DashboardScreen";
import AuthServices from "../../services/AuthService";

const validationSchema = Yup.object().shape({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
export default function LoginFrom() {
  const [wrong, setwrong] = useState("");
  let [count, setcount] = useState(0);
  let [disabled, setdisable] = useState(false);
  let navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values);
          let Auth = await AuthServices.login(values);
          localStorage.setItem("userToken", Auth);
          const status = localStorage.getItem("isLoggedIn");
          const role = localStorage.getItem("userRole");
          const userID = localStorage.getItem("userID");
          console.log("logged?", status);
          console.log("Role", role);
          console.log("userID", userID);
          console.log("ana", Auth);
          let path = `dashboard`;
          if (Auth && role == "admin") {
            navigate(path);
          } else {
            console.log("please enter");
            setcount(count + 1);
            console.log(count);
            if (count < 2) {
              setwrong("Incorrect Email or Password");
            } else {
              setwrong("3 Wrong Trials try after 2 min");
              setdisable(true);
              setTimeout(() => {
                setdisable(false);
              }, 6000);
              setcount(0);
            }
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
          return (
            <Form className="form-container">
              <h2>Login</h2>
              <div className="unvalid-msg-cont">
                <p className="unvalid-msg">{wrong}</p>
              </div>
              <div className="text-fieldcont">
                <Field
                  className="text-field"
                  placeholder="   Example@gmail.com"
                  type="email"
                  name="email"
                  disabled={disabled}
                />
              </div>
              <ErrorMessage className="err-msg" name="email" component="div" />

              <div className="text-fieldcont">
                <Field
                  className="text-field"
                  placeholder="   Password"
                  type="password"
                  name="password"
                  disabled={disabled}
                />
              </div>
              <ErrorMessage
                className="err-msg"
                name="password"
                component="div"
              />

              <button
                className="login-btn"
                type="submit"
                onClick={handleSubmit}
              >
                LOGIN
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
