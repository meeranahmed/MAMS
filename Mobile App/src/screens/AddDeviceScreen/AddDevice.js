import { Formik } from "formik";
import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView
} from "react-native";
import CustomButton from "../../components/CustomButton";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import apiServices from "../../services/apiServices";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
export default function AddDevice() {
  const route = useRoute();
    const navigation = useNavigation();
    const [errorState, setErrorState] = useState("");

    return (
        <View style={styles.container}>
      <Formik
        initialValues={{user_id:"" ,manufacturer: "", equipment_num: "", equipment_name: "", model: "", hospital_num: "988",maintenance_company_id: "1", responsible_personnel: "", department: "", floor: "", room: "", installation_date: "", warranty: "", warranty_period: "", warranty_start_date: "", warranty_end_date: "", contract: "", contract_period: "", contract_start_date: "", contract_end_date: "", calibration_date: "", calibration_frequency: "", ppm_frequency: "", ppm_date: ""}}
        onSubmit={async (values) => {
          const auth = await SecureStore.getItemAsync("user");
          const status = await AsyncStorage.getItem("isLoggedIn");
          const role = await AsyncStorage.getItem("userRole");
          console.log(values);
          if (values.user_id != "" &&values.manufacturer != "" && values.equipment_num != "" && values.equipment_name != "" && values.model != "" && values.hospital_num != "" && values.maintenance_company_id != "" && values.responsible_personnel != "" && values.department != "" && values.floor != "" && values.room != "" && values.installation_date != "" && values.warranty != "" && values.contract != "" && values.calibration_date != "" && values.calibration_frequency != "" && values.ppm_frequency != "" && values.ppm_date != "") {

          if (auth) {
            await apiServices.addNewDevice(values);
            navigation.navigate("Home", { user: role });
          } }
          else {
            setErrorState("Please Enter All Fields!")
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <ScrollView>
              <Text style={styles.header}>Add New Device</Text>
              <Text style={styles.error}>{errorState}</Text>
            <TextInput
              style={styles.Input}
              placeholder="Manufacturer"
              onChangeText={handleChange("manufacturer")}
              onBlur={handleBlur("manufacturer")}
              value={values.manufacturer}
            />
            <TextInput
              style={styles.Input}
              placeholder="Equipment Number"
              onChangeText={handleChange("equipment_num")}
              onBlur={handleBlur("equipment_number")}
              value={values.equipment_num}
            />
            <TextInput
              style={styles.Input}
              placeholder="Equipment Name"
              onChangeText={handleChange("equipment_name")}
              onBlur={handleBlur("equipment_name")}
              value={values.equipment_name}
            />
            <TextInput
              style={styles.Input}
              placeholder="Model"
              onChangeText={handleChange("model")}
              onBlur={handleBlur("model")}
              value={values.model}
            />
            <TextInput
              style={styles.Input}
              placeholder="Hospital Number"
              onChangeText={handleChange("hospital_id")}
              onBlur={handleBlur("hospital_id")}
              value={values.hospital_num}
            />
             <TextInput
              style={styles.Input}
              placeholder="Maintenance Company Id"
              onChangeText={handleChange("maintenance_company_id")}
              onBlur={handleBlur("maintenance_company_id")}
              value={values.maintenance_company_id}
            />
            <TextInput
              style={styles.Input}
              placeholder="Responsible Personel"
              onChangeText={handleChange("responsible_personnel")}
              onBlur={handleBlur("responsible_personnel")}
              value={values.responsible_personnel}
            />
            <TextInput
              style={styles.Input}
              placeholder="User Id"
              onChangeText={handleChange("user_id")}
              onBlur={handleBlur("user_id")}
              value={values.user_id}
            />
            <TextInput
              style={styles.Input}
              placeholder="Department"
              onChangeText={handleChange("department")}
              onBlur={handleBlur("department")}
              value={values.department}
            />
            <TextInput
              style={styles.Input}
              placeholder="Floor"
              onChangeText={handleChange("floor")}
              onBlur={handleBlur("floor")}
              value={values.floor}
            />
            <TextInput
              style={styles.Input}
              placeholder="Room"
              onChangeText={handleChange("room")}
              onBlur={handleBlur("room")}
              value={values.room}
            />
            <TextInput
              style={styles.Input}
              placeholder="Installation Date"
              onChangeText={handleChange("installation_date")}
              onBlur={handleBlur("installation_date")}
              value={values.installation_date}
            />
            <TextInput
              style={styles.Input}
              placeholder="Warranty?"
              onChangeText={handleChange("warranty")}
              onBlur={handleBlur("warranty")}
              value={values.warranty}
            />
            <TextInput
              style={styles.Input}
              placeholder="Warranty Period"
              onChangeText={handleChange("warranty_period")}
              onBlur={handleBlur("warranty_period")}
              value={values.warranty_period}
            />
            <TextInput
              style={styles.Input}
              placeholder="Warranty Start Date"
              onChangeText={handleChange("warranty_start_date")}
              onBlur={handleBlur("warranty_start_date")}
              value={values.warranty_start_date}
            />
            <TextInput
              style={styles.Input}
              placeholder="Warranty End Date"
              onChangeText={handleChange("warranty_end_date")}
              onBlur={handleBlur("warranty_end_date")}
              value={values.warranty_end_date}
            />
            <TextInput
              style={styles.Input}
              placeholder="Contract?"
              onChangeText={handleChange("contract")}
              onBlur={handleBlur("contract")}
              value={values.contract}
            />
            <TextInput
              style={styles.Input}
              placeholder="Contract Period"
              onChangeText={handleChange("contract_period")}
              onBlur={handleBlur("contract_period")}
              value={values.contract_period}
            />
            <TextInput
              style={styles.Input}
              placeholder="Contract Start Date"
              onChangeText={handleChange("contract_start_date")}
              onBlur={handleBlur("contract_start_date")}
              value={values.contract_start_date}
            />
            <TextInput
              style={styles.Input}
              placeholder="Contract End Date"
              onChangeText={handleChange("contract_end_date")}
              onBlur={handleBlur("contract_start_date")}
              value={values.contract_end_date}
            />
            <TextInput
              style={styles.Input}
              placeholder="Calibration Date"
              onChangeText={handleChange("calibration_date")}
              onBlur={handleBlur("calibration_date")}
              value={values.calibration_date}
            />
            <TextInput
              style={styles.Input}
              placeholder="Calibration Frequency"
              onChangeText={handleChange("calibration_frequency")}
              onBlur={handleBlur("calibration_frequency")}
              value={values.calibration_frequency}
            />
            <TextInput
              style={styles.Input}
              placeholder="PPM Date"
              onChangeText={handleChange("ppm_date")}
              onBlur={handleBlur("ppm_date")}
              value={values.ppm_date}
            />
            <TextInput
              style={styles.Input}
              placeholder="PPM Frequency"
              onChangeText={handleChange("ppm_frequency")}
              onBlur={handleBlur("ppm_frequency")}
              value={values.ppm_frequency}
            />
            <CustomButton title={"Add"} clickHandle={handleSubmit} />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
  },
  error: {
    color: "#FF0000",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1AB07A"

  },
  Input: {
    height: 45,
    width: 0.97* width,
    margin: "2%",
    borderRadius: 50,
    borderColor: "#6C6868",
    borderWidth: 1,
    padding: 10,
  },
});
