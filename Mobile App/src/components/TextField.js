import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextField = ({ placeHolder }) => {
  const [text, settext] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={settext}
        placeholder={placeHolder}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});
export default TextField;
