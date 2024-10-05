import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const Screen1b = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#C7F4F6",
          "#D1F4F6",
          "#D1F4F6",
          "#D1F4F6",
          "#E5F4F5",
          "#E5F4F5",
          "#E5F4F5",
          "#E5F4F5",
          "#37D6F8",
          "#00CCF9",
        ]}
        style={styles.container}
      >
        <Image
          source={require("../assets/images/lock.png")}
          style={styles.Image}
        />
        <View>
          <Text style={styles.title}>
            FORGET <br />
            PASSWORD
          </Text>
        </View>
        <View>
          <Text style={styles.detail}>
            Provide your account’s email for which you want to reset your
            password{" "}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Feather name="mail" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.touchContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>SEND</Text>
            </TouchableOpacity>
        </View> 
        
      </LinearGradient>
    </View>
  );
};

export default Screen1b;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Image: {
    width: 105,
    height: 117,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  detail: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C4C4C4",
        width: 300,
        height: 50,
    },
    input: {
        width: 250,
        height: 50,
        fontSize: 20,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: "#E3C000",
        padding: 10,
        width: 305,
        height: 45,
        alignItems: "center",
        margin: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    touchContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
});
