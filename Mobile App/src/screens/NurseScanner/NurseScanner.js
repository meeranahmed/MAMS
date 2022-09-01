import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import {BarCodeScanner} from 'expo-barcode-scanner';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function NurseScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const navigation = useNavigation();
  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setScannedData(data);
  };
  
  if (hasPermission === null){
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false){
    return <Text>No access to camera</Text>
  }
  const clickHandler = () => {
    console.log(scannedData);
    navigation.navigate("Nurse");
  };
  return (
    <View style={styles.container}>
      <View style={{height: 0.7* height}}>
        <BarCodeScanner 
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style = {StyleSheet.absoluteFillObject}
        />
      </View>
      <View style={{height: 0.3* height}}>
          <Text>{scannedData}</Text>
          {scanned && <CustomButton title="Report Error" clickHandle={clickHandler}/>}
      </View>
    </View>
  );
}
export default NurseScanner;

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "column",
    justifyContent: "center"
  }
})
