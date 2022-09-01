import React from "react";
import "./Loginscreen.css";
import LoginFrom from "../../components/LoginForm/LoginFrom";
import loginimg from "../../assets/Images/login.png";
import logo from "../../assets/Images/logo2.jpg";
export const LoginScreen = () => {
  return (
    <div className="login-container" style={{ height: "100vh" }}>
      <div className="img-flex">
        <img src={logo} alt="loginimg" />
      </div>
      <div className="form-flex">
        <div className="vert-center">
          <LoginFrom />
        </div>
      </div>
    </div>
  );
};
