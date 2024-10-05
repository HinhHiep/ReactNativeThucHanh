import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

const Screen1e = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>REGISTER</Text>
      </View>
      <View >
        <TextInput placeholder="Name" style={styles.input}></TextInput>
        <TextInput placeholder="Phone" style={styles.input}></TextInput>
        <TextInput placeholder="Email" style={styles.input}></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        ></TextInput>
        <TextInput placeholder="Birthday" style={styles.input}></TextInput>
        <View style={styles.genderContainer}>
          <View style={styles.radioContainer}>
            <RadioButton value="Male" />
            <Text>Male</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton value="Female" />
            <Text>Female</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>REGISTER</Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>
        </View>

      </View>

    </View>
  );
};

export default Screen1e;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31AA5230",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  title: {
    fontWeight: "700",
    fontSize: 25,
  },
  input: {
    backgroundColor: "#C4C4C44D",
    borderWidth: 1,
    borderColor: "#F2F2F2",
    width: 330,
    height: 54,
    paddingLeft: 20,
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  button: {
    backgroundColor: "#E53935",
    alignItems: "center",
    marginTop: 30,
    width: 330,
    marginBottom: 10
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    padding: 10,
  },
  buttonContainer:{
    alignItems:'center'
  }
});
