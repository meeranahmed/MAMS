import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFileMedical } from '@fortawesome/free-solid-svg-icons'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faAlarmPlus} from '@fortawesome/free-solid-svg-icons'
import { faFileWaveform } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Octicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import CustomDrawer from '../../components/CustomDrawer';
import WarrantyAlarm from '../WarrantyAlarmScreen/WarrantyAlarm';
import ContractAlarm from '../ContractAlarmScreen/ContractAlarm';
import CallibrationAlarm from '../CallibrationAlaramScreen/CallibrationAlarm';
import DownTimeAlarm from '../DownTimeAlarmScreen/DownTimeAlarm'; 
import {useEffect ,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Drawer = createDrawerNavigator();


export default function Alarm(){

    return (
          <Drawer.Navigator
            drawerContent={ (props)=> <CustomDrawer   {...props}  />}
            edgeWidth={500}
            hideStatusBar={false}
            screenOptions={{
              headerShown: false,
              // drawerActiveBackgroundColor: '#1AB07A',
              // drawerActiveTintColor: '#fff',
              drawerInactiveTintColor: '#333',
              drawerLabelStyle: {
                marginLeft: -20,
                fontSize: 15,
              },
            }}

          >
            <Drawer.Screen
              name="WarrantyAlarm"
              component={WarrantyAlarm}
              options={{
                title: 'Warranty Alarm',
                drawerIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faInfoCircle}
                    size={focused ? 25 : 20}
                    color={focused ? '#1AB07A' : '#999999'}
                  />
                )
              }}
            />
            <Drawer.Screen
              name="CallibrationAlarm"
              component={CallibrationAlarm}
              options={{
                title: 'Calibration Alarm',
                drawerIcon: ({ focused }) => (
                  <Octicons name='tools'
                    size={focused ? 25 : 20}
                    color={focused ? '#1AB07A' : '#999999'}
                  />
                )
              }}
            />
            <Drawer.Screen
              name="ContractAlarm"
              component={ContractAlarm}
              options={{
                title: 'Contract Alarm',
                drawerIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faFileContract}
                    size={focused ? 25 : 20}
                    color={focused ? '#1AB07A' : '#999999'}
                  />
                )
              }}
            />
            <Drawer.Screen
              name="Down Time Alarm"
              component={DownTimeAlarm}
              options={{
                title: 'Down Time Alarm',
                drawerIcon: ({ focused }) => (
                    <FontAwesomeIcon icon={faInfoCircle}
                    size={focused ? 25 : 20}
                    color={focused ? '#1AB07A' : '#999999'}
                  />
                )
              }}
            />
            
          </Drawer.Navigator>
      )
    }