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
import { useRoute } from "@react-navigation/native";

  
  export default function List() {

    const navigation = useNavigation();
    const route = useRoute();
    let type = route.params.value;
    let dep = route.params.dep;
    console.log("list",type)
    console.log("list",dep)


  const [List,setList] =useState([]);

  useEffect(() => {
    apiServices.getList(type ,dep).then(async (response) => {
        
        setList(response.data)

        
      })
      console.log("H",List)
  }, []);

  
  let size = List.length
  console.log("size",size)

  const oneitem =({item}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
            </View>
          
          <View style={styles.container1}>
          <Text style={styles.date}> ID: {item.id} :</Text>
             <Text style={styles.name}>{item.equipment_name}</Text>
             </View>
             
                
        </View>

    )
  }

  const separateItem =() =>{
      return(
        <View />
      )
  }

    return (
      <View style={styles.container}>
        <Text  style={styles.title} > List Of Devices :</Text>  

        <FlatList
                        ItemSeparatorComponent={separateItem}
                        data={List}
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
      textAlign: "center",
      fontWeight: "bold",
      color:'#1AB07A',
      marginLeft: "3%",
      marginTop:'5%'
      
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