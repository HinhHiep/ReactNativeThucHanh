import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const XMEye = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/eyeball.svg")} />
      <View>
        <View style={styles.inputcontainer}>
          <Image source={require("../assets/images/user.svg")} />
          <TextInput
            placeholder="Please input user name"
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.inputcontainer}>
          <Image source={require("../assets/images/pass.png")} />
          <TextInput
            placeholder="Please input user name"
            style={styles.input}
            secureTextEntry
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text>Register</Text>
        <Text>Forgot Password</Text>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <Text style={styles.lineText}>Other Login Methods</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/newUser.svg")} />
        <Image source={require("../assets/images/Wifi.svg")} />
        <View style={styles.fbContainer}>
          <Image
            source={require("../assets/images/icofacebook.png")}
            style={styles.fbImage}
          />
        </View>
      </View>
    </View>
  );
};

export default XMEye;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center'
  },
  inputcontainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    padding: 5,
    borderColor: "#C4C4C4",
    marginBottom: 30,
  },
  input: {
    marginLeft: 20,
    width: 250,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#386FFC",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },

  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  registerContainer: {
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
    width: 300,
    marginTop: 30,
  },
  line: {
    borderBottomWidth: 1,
    width: 90,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  lineText: {
    padding: 10,
  },
  fbContainer: {
    backgroundColor: "#3A579C",
    width: 74,
    height: 74,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  fbImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginTop: 30,
  },
});
