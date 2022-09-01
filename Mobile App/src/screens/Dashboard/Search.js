import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import { useState, useEffect } from "react";
import apiServices from "../../services/apiServices";
import { FlatGrid } from 'react-native-super-grid';
import { useRoute } from "@react-navigation/native";

  export default function Search() {

    const [Value, setValue] = useState("")
    const [DepStat, setDepStat] = useState([]);

    const route = useRoute();
    let device = route.params.DepStat;
    console.log("jsjds",device)

    

    

    const oneitem =({item}) =>{
      return(
        <TouchableWithoutFeedback onPress={() => Grid(item.keyword)}>
          <View style={[styles.itemContainer, { backgroundColor: '#5EC7A1' }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemcount}>{item.count}</Text>
        </View>
        </TouchableWithoutFeedback>      
      )
  }
    
      // console.log("press2", DepStat);

   
    return (
      <View style={styles.container}> 

                <FlatGrid
                    itemDimension={140}
                    data={device}
                    style={styles.gridView}
                    spacing={10}
                    renderItem={oneitem}

                />
          
        </View>   
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "white",
    },

    title: {
      padding:'10%',
      fontSize: 30,
      textAlign: "center",
      fontWeight: "bold",
      color: "#1AB07A",
    },
    
  
    gridView: {
        marginTop: 10,
        flex: 1,
      },
      Input: {
        height: 50,
        width: 300,
        margin: 12,
        borderRadius: 20,
        borderColor: "#6C6868",
        borderWidth: 1,
        
        },

        itemContainer: {
          justifyContent: 'center',
          borderRadius: 15,
          padding: 10,
          height: 180,
        },
        itemName: {
          alignSelf:'center',
          fontSize: 18,
          color: '#fff',
          fontWeight: '400',
        },
        itemcount: {
          alignSelf:'center',
          fontWeight: '600',
          fontSize: 18,
          color: '#fff',
          top:20,
        },
  });
  