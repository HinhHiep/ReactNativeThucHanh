import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const Screen2a = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        style={styles.containerLinear}
      >
        <Text style={styles.title}>LOGIN</Text>
        <View>
          <View style={styles.inputContainer}>
            <FontAwesome name="user" size={25}></FontAwesome>
            <TextInput placeholder="Name" style={styles.input}></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/images/lock.png")}
              style={styles.lockImage}
            />
            <TextInput
              placeholder="Name"
              style={styles.input}
              secureTextEntry
            ></TextInput>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.text}>CREATE ACCOUNT</Text>
        </View>
        
      </LinearGradient>
    </View>
  );
};

export default Screen2a;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  containerLinear: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C4C4C44D",
    borderWidth: 1,
    borderColor: "#F2F2F2",
    width: 330,
    height: 54,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    marginLeft: 20,
    fontSize: 20,
  },
  lockImage: {
    width: 25,
    height: 25,
  },
  button: {
    backgroundColor: "#060000",
    padding: 10,
    width: 330,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 50,
  },
  buttonContainer: {
    alignItems: "center",
  },
 
});
