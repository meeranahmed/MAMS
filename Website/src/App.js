import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginFrom from "./components/LoginForm/LoginFrom";
import SignUpForm from "./components/SignUpForm";
import DashboardScreen from "./pages/Dashboard/DashboardScreen";

import { LoginScreen } from "./pages/Login/LoginScreen";
import SignUp from "./pages/Signup/SignUp";
import ViewDevice from "./pages/viewDevice/viewDevice";
import DeviceEdit from "./pages/DeviceEdit/DeviceEdit";
import ViewDevicesList from "./pages/ViewDevicesList/ViewDevicesList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/edit" element={<DeviceEdit />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/viewDevice/:deviceID" element={<ViewDevice />} />
        <Route path="/viewDevices/:keyWord" element={<ViewDevicesList />} />
      </Routes>
    </BrowserRouter>
  );
}
