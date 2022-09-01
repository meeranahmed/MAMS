import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useRoute } from "@react-navigation/native";
// import { printToFileAsync } from 'expo-print';
// import { shareAsync } from 'expo-sharing';
// import RenderHtml from 'react-native-render-html';
import apiServices from "../../services/apiServices";
import { useState , useEffect } from 'react';
  

  
  export default function PPM_PDF() {
    
    const route = useRoute();
    let id = route.params.log_id;
    let log_id = id.item.id
    let devive_id = route.params.id;
    console.log("here",log_id)
    console.log("here2",devive_id)
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    
    const [Equipment, setEquipment] = useState("");
    const [Operation, setOperation] = useState("");
    const [Visit_date, setVisit_date] = useState("");
    useEffect(() => {
      apiServices
        .PPM_PDF(devive_id,log_id)
        .then(async (response) => {
          console.log(response.data)
          setEquipment(response.data["equipment_name"]);
          setVisit_date(response.data["visit_date"]);
          setOperation(response.data["operation"]);
        })
        .catch((error) => console.log(error)); // display errors
    }, []);

    return (
      <View style={styles.container}>
        <Text  style={styles.title} > {Equipment} </Text>   
        <Text  style={styles.Subtitle} > Periodic Preventive Maintenance </Text>

        <View style={styles.container2}> 
          <Text  style={styles.head} > Date: </Text>
          <Text  style={styles.text} > {Visit_date} </Text>
        </View>

        {/* <View style={styles.container2}> 
          <Text  style={styles.head} > Request Date: </Text>
          <Text  style={styles.text} > 25/6/2022 </Text>
        </View> */}

        <View style={styles.container3}>
          <Text  style={styles.head} > Operation :</Text>   
          <Text  style={styles.text} > {Operation} </Text>
        </View>

        {/* <View style={styles.container4}> 
          <Text  style={styles.text} > 30/6/2022 </Text>
          <Text  style={styles.head} > Repair Date: </Text>  
        </View> */}

        {/* <View style={styles.container4}> 
          <Text  style={styles.text} > 5 days </Text>
          <Text  style={styles.head} > Down Time: </Text> */}
          
        
        {/* </View> */}

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
  