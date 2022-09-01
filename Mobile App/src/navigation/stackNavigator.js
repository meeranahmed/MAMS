import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import Login from "../screens/LoginScreen/login";
import Scanner from "../screens/ScanningScreen/Scanner";
import Display from "../screens/DisplayScreen/Display";
import EquipmentDetails from "../screens/EquipmentDetailsScreen/EquipmentDetails";
import Nurse from "../screens/NurseScreen/Nurse";
import Home from "../screens/HomeScreen/Home";
import MaintenanceContract from "../screens/MaintenanceContractScreen/MaintenanceContract";
import MaintenanceDetails from "../screens/MaintenanceDetailsScreen/MaintenanceDetails";
import AddDevice from "../screens/AddDeviceScreen/AddDevice";
import PPM_Files from "../screens/PPMLogFiles/PPM";
import PPM_PDF from "../screens/PPMLogFiles/PPM_PDF";
import PPM_Create from "../screens/PPMLogFiles/PPM_Create";
import NurseScanner from "../screens/NurseScanner/NurseScanner";
import NavHeader from "../components/NavHeader";
import CM_Files from "../screens/CMLogFiles/CM";
import CM_PDF from "../screens/CMLogFiles/CM_PDF";
import CM_Create from "../screens/CMLogFiles/CM_Create";
import RequestMaintenanceCompany from "../screens/RequestMaintenanceCompany/RequestMaintenanceCompany";
import DeviceScrapping from "../screens/DeviceScrapping/DeviceScrapping";
import Statistics from "../screens/Dashboard/Statistics";
import Search from "../screens/Dashboard/Search";
import Alarm from "../screens/AlarmScreen/Alarm";
import ContractAlarm from "../screens/ContractAlarmScreen/ContractAlarm";
import WarrantyAlarm from "../screens/WarrantyAlarmScreen/WarrantyAlarm";
import CallibrationAlarm from "../screens/CallibrationAlaramScreen/CallibrationAlarm";
import DownTimeAlarm from "../screens/DownTimeAlarmScreen/DownTimeAlarm";
import List from "../screens/Dashboard/List";
import AlertAction from "../screens/AlertAction/AlertAction";

import ScrappingAction from "../screens/ScrappingAction/ScrappingAction";

import Notification_History from "../screens/Notification/Notification_History";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  // screenOptions={{ headerShown: false }}
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: true,
          headerBackVisible: false,
          title: "",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen name="login" component={Login} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: true,
          headerTintColor: "white",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="CM_PDF" component={CM_PDF} />
        <Stack.Screen name="PPM_PDF" component={PPM_PDF} />
        <Stack.Screen
          name="Notification_History"
          component={Notification_History}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerBackVisible: false,
          headerShown: true,
          headerTintColor: "white",
          headerShadowVisible: false,
          headerTitle: () => (
          <View style={{marginLeft: 250}}>
            <NavHeader />
            </View>
            ),
          headerStyle: {
            backgroundColor: "#1AB07A",
            height: 60,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: true,
          headerTintColor: "white",
          headerShadowVisible: false,
          headerTitle: () => <NavHeader />,
          headerStyle: {
            backgroundColor: "#1AB07A",
            height: 60,
          },
        }}
      >
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Display" component={Display} />
        <Stack.Screen name="EquipmentDetails" component={EquipmentDetails} />
        <Stack.Screen
          name="MaintenanceDetails"
          component={MaintenanceDetails}
        />
        <Stack.Screen name="Nurse" component={Nurse} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen
          name="MaintenanceContract"
          component={MaintenanceContract}
        />
        <Stack.Screen name="AddDevice" component={AddDevice} />
        <Stack.Screen name="PPM_Files" component={PPM_Files} />
        <Stack.Screen name="PPM_Create" component={PPM_Create} />
        <Stack.Screen name="CM_Files" component={CM_Files} />
        <Stack.Screen name="CM_Create" component={CM_Create} />
        <Stack.Screen name="NurseScanner" component={NurseScanner} />
        <Stack.Screen
          name="RequestMaintenanceCompany"
          component={RequestMaintenanceCompany}
        />
        <Stack.Screen name="DeviceScrapping" component={DeviceScrapping} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ScrappingAction" component={ScrappingAction} />
        <Stack.Screen name="Alarm" component={Alarm} />
        <Stack.Screen name="WarrantyAlarm" component={WarrantyAlarm} />
        <Stack.Screen name="ContractAlarm" component={ContractAlarm} />
        <Stack.Screen name="CallibrationAlarm" component={CallibrationAlarm} />
        <Stack.Screen name="DownTimeAlarm" component={DownTimeAlarm} />
        <Stack.Screen name="List" component={List} />
   
        <Stack.Screen name="AlertAction" component={AlertAction} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
