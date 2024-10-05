import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import { CheckBox } from 'react-native-elements';
 

const Screen2c = () => {
  return (
    <View style={styles.container}>
        
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFill} >
        
            <Defs>
            <RadialGradient id="grad" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
                <Stop offset="0%" stopColor="#C4C4C400" stopOpacity="1" />
                <Stop offset="100%" stopColor="#3B3B98" stopOpacity="1" />
            </RadialGradient>
            </Defs>
            <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
            
        </Svg>
        <View style={styles.bounder}>
           <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>PASSWORD <br /> GENERATOR</Text>
           </View>

          <View style={styles.inputContainer}>
             <TextInput style={styles.input}></TextInput>
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.text}>Password length</Text>
            <TextInput style={styles.lengthInput}></TextInput>
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.text}>Include lower case letters</Text>
            <CheckBox checked={true} />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.text}>Include upcase letters</Text>
            <CheckBox checked={false} />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.text}>Include number</Text>
            <CheckBox checked={true} />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.text}>Include special symbol</Text>
            <CheckBox checked={false} />
          </View>

          <View style={styles.generateContainer}>
            <Pressable style={styles.generateButton}>
                <Text style={styles.text}>GENNERATE PASSWORD</Text>
            </Pressable>
          </View>
        </View>
       

    </View>
    
  )
}

export default Screen2c

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: 20,
    },
    bounder: {
        flex: 1,
        width: '100%',
        backgroundColor: '#23235B',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
            blur: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    inputContainer: {
        backgroundColor: '#151537',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        color: 'white',
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    lengthInput: {
        width: 118,
        height: 33,
        padding: 10,
        backgroundColor: 'white',
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    generateButton: {
        backgroundColor: '#3B3B98',
        justifyContent: 'center',
        alignItems: 'center',
    },
    generateContainer: {
        backgroundColor: '#3B3B98',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    }
})