import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import CheckBox from 'expo-checkbox';
import React, {useState} from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function MaintenanceContract() {
    const navigation = useNavigation();
  const returnHome = () => {
    console.log(check1);
    console.log(check2);
    console.log(check3);
    if(check1 || check2 || check3) {
        navigation.navigate("EngHome");
    }    
  };
   const [check1, setCheck1] = useState(false);
   const [check2, setCheck2] = useState(false);
   const [check3, setCheck3] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.upper}>
                <Text style={styles.header}>Maintenance</Text>
                <Text style={styles.header2}>Contract</Text>
            </View>
             <View style={styles.lower}>
                 <Text style={{fontSize: 24,textAlign:"center", marginTop:15, fontWeight:"bold", color: "black"}}>Maintenance Contract</Text>
                <TouchableOpacity style={{flexDirection: "row", alignItems:"center", marginTop:50, marginLeft: 50}} onPress={() => setCheck1(!check1)}>
                   <CheckBox style={styles.checkbox} value={check1} />
                   <Text style={styles.text}>Renew Contract</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", alignItems:"center", marginTop:50, marginLeft: 50}} onPress={() => setCheck2(!check2)}>
                   <CheckBox style={styles.checkbox} value={check2} />
                   <Text style={styles.text}>Change Contract</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", alignItems:"center", marginTop:50, marginLeft: 50}} onPress={() => setCheck3(!check3)}>
                   <CheckBox style={styles.checkbox} value={check3} />
                   <Text style={styles.text}>End Contract</Text>
                </TouchableOpacity>
                <CustomButton title="Submit" clickHandle={returnHome}></CustomButton>
            </View>
                
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1AB07A",
    },
    upper: {
        height: 0.3 * height,
        backgroundColor: "#1AB07A",
    }, 
    header: {
        width: width,
        height: 46,
        fontWeight: "bold",
        fontSize: 35,
        lineHeight: 42,
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: 75
    },
    header2: {
        width: width,
        height: 46,
        fontWeight: "bold",
        fontSize: 35,
        lineHeight: 42,
        textAlign: "center",
        color: "#FFFFFF",
      
    },
    lower: {
        height: 0.7 * height,
        backgroundColor: "#FFFFFF",
        borderRadius: 15
        
    },
    text: {
        fontSize: 24,
        fontWeight: "normal",
        color: "#000000",
        marginLeft: 10
    },
    checkbox: {
        backgroundColor: "#1AB07A"
    },
})