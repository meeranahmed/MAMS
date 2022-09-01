import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EquipmentDetails from "../EquipmentDetailsScreen/EquipmentDetails";
import MaintenanceDetails from "../MaintenanceDetailsScreen/MaintenanceDetails";
import CustomDrawer from "../../components/CustomDrawer";
import PPM_Files from "../PPMLogFiles/PPM";
import PPM_Create from "../PPMLogFiles/PPM_Create";
import CM_Files from "../CMLogFiles/CM";
import RequestMaintenanceCompany from "../RequestMaintenanceCompany/RequestMaintenanceCompany";
import DeviceScrapping from "../DeviceScrapping/DeviceScrapping";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFileMedical } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faFileWaveform } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { Octicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { useRoute } from "@react-navigation/native";
import CM_Create from "../CMLogFiles/CM_Create";

const Drawer = createDrawerNavigator();

export default function Display() {
  const route = useRoute();
  let device = route.params.scannedData;
  console.log("sc", device);
  console.log("yarab", route.params.scannedData);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      edgeWidth={500}
      hideStatusBar={false}
      screenOptions={{
        headerShown: false,
        // drawerActiveBackgroundColor: '#1AB07A',
        // drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Maintenance"
        component={MaintenanceDetails}
        initialParams={{ params: route.params.scannedData }}
        options={{
          title: "Maintenance Details",
          drawerIcon: ({ focused }) => (
            <Octicons name='tools'
                    size={focused ? 25 : 20}
                    color={focused ? '#1AB07A' : '#999999'}
                  />
          ),
        }}
      />
      <Drawer.Screen
        name="EquipmentDetails"
        component={EquipmentDetails}
        initialParams={{ params: route.params.scannedData }}
        options={{
          title: "Equipment Details",
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faInfoCircle}
              size={focused ? 25 : 20}
              color={focused ? "#1AB07A" : "#999999"}
            />
          ),
        }}
      />
      
      <Drawer.Screen
        name="PPM"
        component={PPM_Files}
        initialParams={{ params: route.params.scannedData }}
        options={{
          title: "PPM Log Files",
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faFileWaveform}
              size={focused ? 25 : 20}
              color={focused ? "#1AB07A" : "#999999"}
            />
          ),
        }}
      />
      <Drawer.Screen
              name="PPM_Create"
              component={PPM_Create}
              initialParams={{ params: route.params.scannedData }}
              options={{
                title: 'Create PPM Log Files',
                drawerIcon: ({ focused }) => (
                  <AntDesign name='addfile'
                  size={focused ? 25 : 20}
                  color={focused ? '#1AB07A' : '#999999'}
                />
                )
              }}
            />
      <Drawer.Screen
        name="CM"
        component={CM_Files}
        initialParams={{ params: route.params.scannedData }}
        options={{
          title: "CM Log Files",
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faFileContract}
              size={focused ? 25 : 20}
              color={focused ? "#1AB07A" : "#999999"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CM_Create"
        component={CM_Create}
        initialParams={{ params: route.params.scannedData }}
        options={{
          title: "Create CM Log Files",
          drawerIcon: ({ focused }) => (
            <AntDesign name='addfile'
                    size={focused ? 25 : 20}
                    color={focused ? '#1AB07A' : '#999999'}
                  />
          ),
        }}
      />
      <Drawer.Screen
        name="Request Maintenance Company"
        component={RequestMaintenanceCompany}
        initialParams={{ params: route.params.scannedData }}
        options={{
          title: "Request Maintenance Company",
          drawerIcon: ({ focused }) => (
            <FontAwesome5 name='hand-holding-medical'
                    size={focused ? 25 : 20}
                    color={focused ? '#1AB07A' : '#999999'}
                  />
          ),
        }}
      />
      <Drawer.Screen
        name="Request Device Scrapping"
        component={DeviceScrapping}
        initialParams={{ params: route.params.scannedData }}
        options={{
          title: "Device Scrapping",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons name='delete-empty-outline'
            size={focused ? 30 : 25}
            color={focused ? '#1AB07A' : '#999999'}
          />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
