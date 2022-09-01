import React from "react";
import SignUpForm from "../../components/SignUpForm";
import logo from "../../assets/Images/logo2.jpg";
import "../Login/Loginscreen.css";

export default function SignUp() {
  return (
    <div className="login-container" style={{ height: "100vh" }}>
      <div className="img-flex">
        <img src={logo} alt="loginimg" />
      </div>
      <div className="form-flex">
        <div className="vert-center">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
