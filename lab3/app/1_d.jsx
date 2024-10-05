import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";

const Screen1d = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text>When you agree to terms and conditions</Text>
        <Text style={styles.forgotPassword}>For got your password? </Text>
        <Text>Or login with</Text>
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.fbContainer}>
            <Image source={require('../assets/images/icofacebook.png')} style={styles.logoImage}/>
        </View>
        <View style={styles.zaloContainer}>
            <Text style={styles.logoZalo}>Z</Text>
        </View>
        <View style={styles.gooleContainer}>
            <Image source={require('../assets/images/icogoogle.png')} style={styles.logoImage}/>
        </View>
      </View>
    </View>
  );
};

export default Screen1d;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31AA5230",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
  },
  input: {
    width: 250,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4C4C44D",
    width: 300,
    height: 50,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#E53935",
    padding: 10,
    width: 305,
    height: 45,
    alignItems: "center",
    margin: 10,
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  forgotPassword: {
    color: "#5D25FA",
    marginVertical:20
  },
  textContainer:{
    alignItems:'center',
  },
  fbContainer:{
    backgroundColor: '#25479B',
    padding: 5,
    width: 110,

    alignItems:'center'
  },
  logoImage:{
    width : 30,
    height: 30,

  },
  logoZalo:{
    fontSize: 28,
    fontWeight: '700',
    color: 'white'
  },
  zaloContainer:{
    backgroundColor: '#0F8EE0',
    padding: 5,
    alignItems: 'center',
    width: 110
  },
  gooleContainer:{
    alignItems: 'center',
    borderWidth: 1, 
    borderColor:'#0680F1',
    padding: 5,
    width: 110
  },
  logoContainer:{
    flexDirection: 'row',
  }
});
