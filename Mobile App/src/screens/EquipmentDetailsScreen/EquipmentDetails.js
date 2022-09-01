import React from "react";
import { DataTable } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";
import { parse } from "react-native-svg";
import apiServices from "../../services/apiServices";

// const getDevice = (equipmentURL_t,auth_t) => {
//   axios.get(equipmentURL_t, { headers: {"Authorization" : `Bearer ${auth_t}`} })
//     .then((res) => {
//       console.log(res.data)
//       setEquipment(res.data["equipment_name"])
//       console.log(Equipment)
//     });
// }

// const equipmentURL = "https://mocki.io/v1/80ba93d2-884c-4877-8c22-381f6671a49c";
export default function EquipmentDetails() {
  const [Equipment, setEquipment] = useState("");
  const [Equipment_num, setEquipment_num] = useState("");
  const [Model, setModel] = useState("");
  const [Hospital_id, setHospital_id] = useState("");
  const [Responsible, setResponsible] = useState("");
  const [Floor, setFloor] = useState("");
  const [Room, setRoom] = useState("");
  const [Inst_date, setInst_date] = useState("");
  const [User_id, setUser_id] = useState("");

  // const [Warrn, setWarrn] = useState("");
  // const [Warrn_period, setWarrn_period] = useState("");

  const [Department, setDepartment] = useState("");

  const route = useRoute();
  let id = route.params.params;
  // var size = Object.keys(route.params).length;
  // console.log(size);
  // let id = hh;
  // for (let index = 0; index < size; index++) {
  //   id = id + route.params[index];
  // }
  // let id = route.params[0]+route.params[1]+route.params[2]+route.params[3];
  console.log("eq", id);

  const equipmentURL = "https://mams-api.herokuapp.com/medical_devices/" + id;

  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    // axios
    //   .get(equipmentURL, { headers: { Authorization: auth } })
    apiServices
      .getMedicalDevice(id)
      .then(async (response) => {
        setEquipment(response.data["equipment_name"]);
        setEquipment_num(response.data["equipment_num"]);
        setModel(response.data["model"]);
        setHospital_id(response.data["hospital_id"]);
        setResponsible(response.data["responsible_personnel"]);
        setUser_id(response.data["user_id"]);
        setDepartment(response.data["department"]);
        setFloor(response.data["floor"]);
        setRoom(response.data["room"]);
        setInst_date(response.data["installation_date"]);
        console.log(response.data);
      })
      .catch((error) => console.log(error)); // display errors
  }, []);

  // useEffect (() => {
  //   getDevice(equipmentURL,auth);
  // });

  return (
    <View style={styles.container}>
      <View style={styles.tContainer}>
        <Text style={styles.title}>Equipment Details</Text>
        <Text style={styles.text}> {Equipment}</Text>
      </View>
      <View style={styles.pContainer}></View>

      <View style={styles.main}>
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell>Equipment number </DataTable.Cell>
            <DataTable.Cell> {Equipment_num} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Equipment</DataTable.Cell>
            <DataTable.Cell> {Equipment} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Model</DataTable.Cell>
            <DataTable.Cell>{Model} </DataTable.Cell>
          </DataTable.Row>

          {/* <DataTable.Row>
            <DataTable.Cell>Hospital ID</DataTable.Cell>
            <DataTable.Cell>{Hospital_id} </DataTable.Cell>
          </DataTable.Row> */}

          <DataTable.Row>
            <DataTable.Cell>Department</DataTable.Cell>
            <DataTable.Cell> {Department} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Floor</DataTable.Cell>
            <DataTable.Cell> {Floor} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Room number</DataTable.Cell>
            <DataTable.Cell> {Room} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Installation date</DataTable.Cell>
            <DataTable.Cell>{Inst_date} </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <View style={{ paddingRight: 5 }}>
              <DataTable.Cell>Responsible Eng</DataTable.Cell>
            </View>
            <DataTable.Cell>{Responsible}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
              <DataTable.Cell>Responsible Eng ID </DataTable.Cell>
            
            <DataTable.Cell>{User_id}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
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
