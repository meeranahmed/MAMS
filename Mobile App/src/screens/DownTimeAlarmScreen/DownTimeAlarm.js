import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import apiServices from '../../services/apiServices';
import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


  
  export default function DownTimeAlarm() {

    const navigation = useNavigation();


  const [History,setHistory] =useState([]);

  useEffect(() => {
    apiServices.getDownTime().then(async (response) => {
        
        setHistory(response.data)

        console.log("H",History)
      })
  }, []);

  

  const Press = async (scannedData) => {
    console.log("Press id",scannedData)
    const role = await AsyncStorage.getItem("userRole");
        if (role == "headEngineer") {
          console.log(role)
          navigation.navigate("AlertAction", { scannedData })
        }
   
  };

  const oneitem =({item}) =>{
    return(
      <TouchableWithoutFeedback  onPress={ () => (Press (item.id))}> 
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
            </View>
          
          <View style={styles.container1}>
          <Text style={styles.date}>{item.id}:</Text>
             <Text style={styles.name}>{item.equipment_name}</Text>
             </View>
             <View>
             <Text style={styles.date}>Down Days: {item.total_down_time}</Text>
             </View>
                
        </View>
      </TouchableWithoutFeedback>
    )
  }

  const separateItem =() =>{
      return(
        <View />
      )
  }
  let reverse = History.reverse()
    return (
      <View style={styles.container}>
        <Text  style={styles.title} >Devices That Have Large Down Time:</Text>  

        <FlatList
                        ItemSeparatorComponent={separateItem}
                        data={reverse}
                        renderItem={ oneitem}
            /> 

      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
    
    },

    title: {
      fontSize: 20,
      textAlign: "left",
      fontWeight: "bold",
      color:'#1AB07A',
      marginLeft: "3%"
      
    },
    
    container1:{
      flexDirection:'row'
    },
    
    name:{
      fontSize:15,
      fontWeight:'600',
      marginLeft:'3%'
  },
  date:{
    marginLeft:'5%',
    fontWeight:'600',
    color:"#878787",
  },

    

    body:{

      left:'40%',
      top:'.3%'
    },
  
    
    item:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:3,
        
        
    },
    avatarContainer:{
        backgroundColor:'#FFFF',
        borderRadius:100,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    icons:{
      
      color:'#1AB07A'
        
    },
    
    
    
  });
  