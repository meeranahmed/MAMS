import React from 'react';
import { StyleSheet, View, Text , TouchableWithoutFeedback } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import apiServices from "../../services/apiServices";
import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchBar from 'react-native-platform-searchbar';
  export default function Statistics() {
    const navigation = useNavigation();

    const [Stat, setStat] = useState([]);

    const [Value, setValue] = useState("")
  
    
    useEffect(() => {
      apiServices.getStatistics().then(async (response) => {
        setStat(response.data);
      });
    }, []);



    const Press = async (Value) => {
      console.log("press", Value);
        apiServices.getDepStatistics(Value).then(async (response) => {
         setStat(response.data);

        // navigation.navigate("Search", { DepStat})
        
        
      });
      
      
      }



      const Grid = async (value , dep) => {
      console.log("press", value);
      navigation.navigate("List", { value , dep})
      
      ;}

    

        
    const oneitem =({item}) =>{
        return(
          <TouchableWithoutFeedback onPress={() => Grid(item.keyword , Value)}>
            <View style={[styles.itemContainer, { backgroundColor: '#5EC7A1' }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemcount}>{item.count}</Text>
          </View>
          </TouchableWithoutFeedback>   
        )
    }


  
    return (
      <View style={styles.container}> 
          <Text style={styles.title}>Admin Dashboard</Text>

                  <SearchBar
                    value={Value}
                    style={{margin:'5%'}}
                    onChangeText={setValue}
                    placeholder="Search "
                    placeholderTextColor={"#878787"}
                    onSubmitEditing={() => Press(Value)}
                  
                  />
    
                <FlatGrid
                    itemDimension={140}
                    data={Stat}
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
      justifyContent: "flex-end",
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
  

