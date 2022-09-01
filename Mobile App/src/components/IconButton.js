import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function IconButton({ i, text, onpress }) {
  let icons = {
    qr: require("../assets/qr-code.png"),
    add: require("../assets/plus.png"),
    dashboard: require("../assets/dashboard.png"),
    alarm: require("../assets/alarm.png")
  };
  let img;

  if( i == "qr"){
    img = icons.qr
  }
  else if ( i == "add"){
    img = icons.add
  }
  else if ( i == "alarm") {
    img = icons.alarm
  }
  else{
    img = icons.dashboard
  }

  // i === "qr" ? (img = icons.qr) : (img = icons.add);

  return (
    <View style={styles.iconButton}>
      <TouchableOpacity style={styles.button} onPress={onpress}>
        <Image style={styles.iconImg} source={img} />
      </TouchableOpacity>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#E8E8E8",
    height: 150,
    width: 150,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImg: {
    width: 90,
    height: 90,
  },
  buttonText: {
    fontSize: 20,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
