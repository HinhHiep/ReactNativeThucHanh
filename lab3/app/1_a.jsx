import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Screen1a = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#D1F4F6","#D1F4F6","#E5F4F5", "#E5F4F5","#E5F4F5","#E5F4F5","#37D6F8", "#00CCF9"]}
        style={styles.container}
      >
        <Image
          source={require("../assets/images/Ellipse 8.png")}
          style={styles.Image}
        />
        <View>
          <Text style={styles.title}>
            GROW <br />
            YOUR BUSINESS
          </Text>
        </View>
        <View>
          <Text style={styles.detail}>
            We will help you to grow your business using online server
          </Text>
        </View>
        <View style={styles.touchContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.text}>HOW WE WORK?</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Screen1a;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Image: {
    width: 140,
    height: 140,
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
  button: {
    backgroundColor: "#E3C000",
    padding: 10,
    borderRadius: 10,
    width: 119,
    height: 48,
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
