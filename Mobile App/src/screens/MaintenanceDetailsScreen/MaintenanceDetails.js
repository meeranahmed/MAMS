import React from "react";
import { DataTable } from "react-native-paper";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import apiServices from "../../services/apiServices";

export default function MaintenanceDetails() {
  const route = useRoute();

  let id = route.params.params;
  // for (let index = 0; index < size; index++) {
  //    id =  id + route.params[index];

  // }
  // let id = route.params[0]+route.params[1]+route.params[2]+route.params[3];
  console.log("ma", id);

  const [Equipment, setEquipment] = useState("");  
  const [Warrenty, setWarrenty] = useState("");
  const [Warrn_date, setWarrn_date] = useState("");
  const [Warrn_period, setWarrn_period] = useState("");
  const [Contract, setContract] = useState("");
  const [Contract_date, setContract_date] = useState("");
  const [Contract_period, setContract_period] = useState("");
  const [Manufacturer, setManufacturer] = useState("");
  const [Status, setStatus] = useState("");
  const [PPM_freq, setPPM_freq] = useState("");
  const [PPM_date, setPPM_date] = useState("");
  const [Cal_freq, setCal_freq] = useState("");
  const [Cal_date, setCal_date] = useState("");
  const [Down_time, setDown_time] = useState("");

  useEffect(() => {
    apiServices
      .getMedicalDevice(id)
      .then(async (response) => {
        setEquipment(response.data["equipment_name"]);
        setWarrenty(response.data["warranty"]);
        setWarrn_date(response.data["warranty_start_date"]);
        setWarrn_period(response.data["warranty_period"]);
        setContract(response.data["contract"]);
        setContract_date(response.data["contract_start_date"]);
        setContract_period(response.data["contract_period"]);
        setManufacturer(response.data["manufacturer"]);
        setStatus(response.data["status"]);
        setPPM_date(response.data["ppm_date"]);
        setPPM_freq(response.data["ppm_frequency"]);
        setCal_date(response.data["callibration_date"]);
        setCal_freq(response.data["callibration_frequency"]);
        setDown_time(response.data["total_down_time"]);
        console.log(Warrenty);
      })
      .catch((error) => console.log(error)); // display errors
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tContainer}>
        <Text style={styles.title}>Maintenance Details</Text>
        <Text style={styles.text}>{Equipment}</Text>
      </View>
      <View style={styles.pContainer}></View>

      <View style={styles.main}>
        <ScrollView>
          <DataTable>
            <DataTable.Row>
              <View>
                <DataTable.Cell>Manufacturer company </DataTable.Cell>
              </View>
              <DataTable.Cell> {Manufacturer}</DataTable.Cell>
            </DataTable.Row>

            {/* <DataTable.Row>
              <View>
                <DataTable.Cell>Maintenance Company</DataTable.Cell>
              </View>
              <DataTable.Cell> Life Care </DataTable.Cell>
            </DataTable.Row> */}

            <DataTable.Row>
              
                <DataTable.Cell>Status</DataTable.Cell>
              
              <DataTable.Cell> {Status}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Total down time</DataTable.Cell>
              <DataTable.Cell> {Down_time} </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Warranty</DataTable.Cell>
              <DataTable.Cell>{Warrenty} </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Warranty start date</DataTable.Cell>
              <DataTable.Cell>{Warrn_date} </DataTable.Cell>
            </DataTable.Row>
            
            <DataTable.Row>
              <DataTable.Cell>Warranty period</DataTable.Cell>
              <DataTable.Cell>{Warrn_period} </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Contract</DataTable.Cell>
              <DataTable.Cell> {Contract} </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Contract start date</DataTable.Cell>
              <DataTable.Cell>{Contract_date} </DataTable.Cell>
            </DataTable.Row>
            
            <DataTable.Row>
              <DataTable.Cell>Contract period</DataTable.Cell>
              <DataTable.Cell>{Contract_period} </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>PPM date</DataTable.Cell>
              <DataTable.Cell> {PPM_date} </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>PPM frequency</DataTable.Cell>
              <DataTable.Cell> {PPM_freq} </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Calibration date</DataTable.Cell>
              <DataTable.Cell> {Cal_date} </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Calibration frequency</DataTable.Cell>
              <DataTable.Cell> {Cal_freq} </DataTable.Cell>
            </DataTable.Row>

          </DataTable>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#1AB07A",
  },

  title: {
    // marginTop:50,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 30,
    color: "white",
  },
  tContainer: {
    height: "10%",
    width: "100%",
  },
  pContainer: {
    height: "15%",
    width: "100%",
  },

  main: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "70%",
    padding: "7%",
  },
});
