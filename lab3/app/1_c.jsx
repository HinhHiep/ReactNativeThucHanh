import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Screen1c = () => {
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
        <View>
          <Text style={styles.title}>CODE</Text>
        </View>
        <View>
          <Text style={styles.titleDetail}>VERIFICATION</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Enter ontime password sent on ++849092605798
          </Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
        </View>
        <View>
            <TouchableOpacity style={styles.button}>    
                <Text style={styles.text}>VERIFY CODE</Text>
            </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Screen1c;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 60,
    fontWeight: "700",
    textAlign: "center",
  },
  titleDetail: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
    input: {
        width: 50,
        height: 50,
        fontSize: 20,
        paddingLeft: 10,
        borderWidth: 1,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 50,
    },
    button: {
        backgroundColor: "#E3C000",
        padding: 10,
        width: 305,
        height: 45,
        alignItems: "center",
        margin: 10,
    },
});
