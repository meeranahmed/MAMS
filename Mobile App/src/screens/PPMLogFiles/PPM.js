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
import { faFileMedical } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
// import * as OpenAnything from "react-native-openanything"
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import apiServices from "../../services/apiServices";
import { useRoute } from "@react-navigation/native";

export default function PPM_Files() {
  const [Pdf_list, setPdf_list] = useState([]);
  const route = useRoute();
  let id = route.params.params;
  // var size = Object.keys(route.params).length;
  // console.log(size);
  // let id =""
  // for (let index = 0; index < size; index++) {
  //   id =  id + route.params[index];

  // }
  console.log("ff", id);

  const navigation = useNavigation();

  useEffect(() => {
    apiServices.getAll_PPM_PDFS(id).then(async (response) => {
      setPdf_list(response.data);

      console.log("pdf", Pdf_list);
    });
  }, []);

  const Press = (log_id) => {
    navigation.navigate("PPM_PDF", { id, log_id });
  };

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
          <Text style={styles.name}>PPM log</Text>
          <Text style={styles.date}>{item.visit_date}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const separateItem = () => {
    return <View style={styles.separator} />;
  };

  // let reverse_pdf = Pdf_list.reverse()
  return (
    <View style={styles.container}>
      <View style={styles.tContainer}>
        <Text style={styles.title}>PPM Log Files</Text>
        {/* <FontAwesomeIcon style={styles.icon} icon={faBar}
                 size= {25}
                          /> */}
      </View>
      <View style={styles.pContainer}></View>
      <View style={styles.main}>
        <View>
          <FlatList
            // ListHeaderComponent={<Text> PP</Text>}
            ItemSeparatorComponent={separateItem}
            data={Pdf_list}
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
    marginLeft: "30%",
    marginTop: "1%",
  },
});
