import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useWindowDimensions } from 'react-native';
// import { printToFileAsync } from 'expo-print';
// import { shareAsync } from 'expo-sharing';
// import RenderHtml from 'react-native-render-html';
import apiServices from "../../services/apiServices";
import { useState , useEffect } from 'react';
import { useRoute } from "@react-navigation/native";
  

  
  export default function CM_PDF() {

    const route = useRoute();
    let id = route.params.log_id;
    let log_id = id.item.id
    let device_id = route.params.id;
    console.log("here",log_id)
    console.log("here2",device_id)
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    
    const [Equipment, setEquipment] = useState("");
    const [Operation, setOperation] = useState("");
    const [Visit_date, setVisit_date] = useState("");
    const [Eng_Request_date, setEng_Request_date] = useState("");
    const [Main_Request_date, setMain_Request_date] = useState("");
    const [Repair_date, setRepair_date] = useState("");
    const [DownTime, setDownTime] = useState("");
    useEffect(() => {
      apiServices
        .CM_PDF(device_id,log_id)
        .then(async (response) => {
          console.log(response.data)
          setEquipment(response.data["equipment_name"]);
          setVisit_date(response.data["created_at"]);
          setOperation(response.data["operation"]);
          setEng_Request_date(response.data["engineer_request_date"]);
          setMain_Request_date(response.data["maintenance_request_date"]);
          setRepair_date(response.data["repair_date"]);
          setDownTime(response.data["downtime"]);
        })
        .catch((error) => console.log(error)); // display errors
    }, []);

    let split = Visit_date.split("T",1)
    console.log("h",split)

    return (
      <View style={styles.container}>
        <Text  style={styles.title} > {Equipment} </Text>   
        <Text  style={styles.Subtitle} > Corrective Maintenance </Text>

        <View style={styles.container2}> 
          <Text  style={styles.head} > Date: </Text>
          <Text  style={styles.text} > {split} </Text>
        </View>

        <View style={styles.container2}> 
          <Text  style={styles.head} > Engineer Request Date: </Text>
          <Text  style={styles.text} > {Eng_Request_date} </Text>
        </View>

        <View style={styles.container2}> 
          <Text  style={styles.head} > Maintenance Request Date: </Text>
          <Text  style={styles.text} > {Main_Request_date} </Text>
        </View>

        <View style={styles.container3}>
          <Text  style={styles.head} > Operation :</Text>   
          <Text  style={styles.text} > {Operation} </Text>
        </View>

        <View style={styles.container4}> 
          <Text  style={styles.text} > {Repair_date} </Text>
          <Text  style={styles.head} > Repair Date: </Text>  
        </View>

        <View style={styles.container4}> 
          <Text  style={styles.text} >{DownTime} </Text>
          <Text  style={styles.head} > Down Time: </Text>
          
        
        </View>

      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
    
    },

    container2: {
      flexDirection:'row',
      padding:10,
      
    },
    container3: {
      padding:10
      
    },

    container4: {
      flexDirection:'row-reverse',
      padding:10,
      
    },


    title: {
      fontSize: 25,
      textAlign: "center",
      fontWeight: "bold",
    },
    Subtitle: {
      fontSize: 20,
      textAlign: "center",
      marginBottom:30
    },
    head: {
      fontSize:15,
      fontWeight: "bold",
    },
    
  });
  