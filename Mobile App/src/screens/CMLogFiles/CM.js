import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useRoute } from "@react-navigation/native";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
// import { printToFileAsync } from 'expo-print';
// import { shareAsync } from 'expo-sharing';
import apiServices from "../../services/apiServices";
import { useState, useEffect } from "react";

export default function CM_Files() {
  const [Cm_list, setCm_list] = useState([]);
  const [Date, setDate] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  let id = route.params.params;
  // var size = Object.keys(route.params).length;
  // console.log(size);
  // let id =""
  // for (let index = 0; index < size; index++) {
  //     id =  id + route.params[index];

  // }
  console.log("cm", id);

  const Press = (log_id) => {
    navigation.navigate("CM_PDF", { id, log_id });
  };

  // const source = `
  //   <html>
  //     <body>
  //       <h1>Hi ${name}</h1>
  //       <p style="color: red;">Hello. Bonjour. Hola.</p>
  //     </body>
  //   </html>
  // `;

  // let generatePdf = async () => {
  //   const file = await printToFileAsync({
  //     html: html,
  //     base64: false
  //   });

  //   await shareAsync(file.uri);
  // };

  useEffect(() => {
    apiServices.getAll_CM_PDFS(id).then(async (response) => {
      setCm_list(response.data);
    

      
    });
    
  }, []);
  console.log("cm", Cm_list);
    
  

  const oneitem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => Press({ item })}>
        <View style={styles.item}>
          <View style={styles.avatarContainer}></View>
          <FontAwesomeIcon
            style={styles.icon}
            icon={faFile}
            size={28}
            //  color={'#1AB07A'}
          />
          <Text style={styles.name}>CM log file</Text>
          <Text style={styles.date}>{item.created_at.split("T",1)}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const separateItem = () => {
    return <View style={styles.separator} />;
  };

  return (
    // <View style={styles.container}>
    // <TextInput value={name} placeholder="Name" style={styles.textInput} onChangeText={(value) => setName(value)} />
    // <Button title="Generate PDF" onPress={generatePdf} />
    // </View>
    <View style={styles.container}>
      <View style={styles.tContainer}>
        <Text style={styles.title}>CM Log Files</Text>
      </View>
      <View style={styles.pContainer}></View>
      <View style={styles.main}>
        <View>
          <FlatList
            // ListHeaderComponent={<Text> PP</Text>}
            ItemSeparatorComponent={separateItem}
            data={Cm_list}
            renderItem={oneitem}
          />
        </View>
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
    padding: "3%",
  },
  separator: {
    height: 1,
    width: "98%",
    backgroundColor: "#ccc",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
  },
  avatarContainer: {
    backgroundColor: "#FFFF",
    borderRadius: 100,
    height: 70,
    width: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    paddingRight: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
  },
  date: {
    marginLeft: "20%",
    marginTop: "5%",
  },
});
