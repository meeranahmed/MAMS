import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";


var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

function Scanner({route}) {
  const role = route.params.user;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState("");
  const [buttonName, setButtonName] = useState("")

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const navigation = useNavigation();
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const clickHandler = () => {
    console.log(scannedData);
    console.log(role)
    if (role == "engineer") {
      navigation.navigate("Display", { scannedData });
      setButtonName("See Details")
    }
    else if ( role == "nurse") {
      navigation.navigate("Nurse", { scannedData });
      setButtonName("Report Error")
    }
    else if (role == "headEngineer" || "admin") {
      navigation.navigate("Display", { scannedData });
      setButtonName("See Details")
    }
    
    
  };
  return (
    <View style={styles.container}>
      <View style={{ height: 0.7 * height }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <View style={{ height: 0.3 * height }}>
        <Text style={styles.id}>You Have Scanned Device With ID: {scannedData}</Text>
        {scanned && ( role == "nurse"  ? (
             <CustomButton title="Report Error" clickHandle={clickHandler} />
        ) : (<CustomButton title="See Details" clickHandle={clickHandler} />)   
        )}
      </View>
    </View>
  );
}
export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  id: {
    textAlign: "center",
    fontWeight: "800",
  }
});
