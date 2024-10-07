import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'

const screens1 = ({navigation}) => {
    const getStartedHandle = () => {
        navigation.navigate('Screen2')
    }
  return (
    <View style={styles.container}>
      <View style={styles.headContainer} >
        <View><Text>9:41</Text></View>
        <View>
            <Image source={require('../assets/images/iconHead.png')}/>
        </View>
      </View>

      <View>
        <Image source={require('../assets/images/Image 95.png')}/>
      </View>
      <View>
        <Text style={styles.text}>MANAGE YOUR TASK</Text>
      </View>

      <View style={styles.inputContainer}>
            <AntDesign name="mail" size={24} color="grey" />
            <TextInput placeholder='Enter your name'></TextInput>
      </View>

      <Pressable style={styles.button} onPress={getStartedHandle}>
        <Text style={styles.textButton}>GET STARTED</Text>
      </Pressable>
    </View>
  )
}

export default screens1

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
        color:'#8353E2',
        paddingHorizontal: 100,
        textAlign: 'center',
        marginTop: 50
    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        marginVertical: 20,
        marginTop: 50
    },
    button:{
        backgroundColor: '#00BDD6',
        width: '80%',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 100
    },
    textButton:{
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    }
})