import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "custom-font": require("../assets/fonts/VT323-Regular.ttf"), // Thay đổi tên phông chữ và đường dẫn
    "ubuntu-bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
  });
};

const screen1 = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  return (
    <View style={styles.conatainer}>
      <View>
        <Text style={styles.text}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>

      <View style={styles.imagecontainer}>
        <Image source={require("../assets/images/bike.png")} />
      </View>

      <View>
        <Text style={styles.name}>POWER BIKE SHOP</Text>
      </View>

      <View style={styles.buttonConatainer}>
        <Pressable style={styles.button}>
            <Text style={styles.textButton}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default screen1;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontFamily: "custom-font",
    fontSize: 26,
    color: "black",
    textAlign: "center",
  },
  imagecontainer: {
    backgroundColor: "#E941411A",
    padding: 25,
    borderRadius: 50,
  },
  name: {
    fontFamily: "ubuntu-bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
    paddingHorizontal: 100,
  },
  button:{
    backgroundColor: "#E94141",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 15,
  },
  textButton:{
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "custom-font",
  },
  buttonConatainer:{
    width: "100%",
  }
});