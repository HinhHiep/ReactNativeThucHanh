import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'

const data = [{
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    job: ['Frontend Developer', 'UI/UX Designer'],
}]

const Item = ({name, email, job}) => {
    return (
        <View >
            {job.map((item, index) => {
                return (
                    <View style={styles.jobContainer}>
                    <View key={index}>
    
                        <Text>{item}</Text>
                    </View>
                    </View>
                )
            
            })}
        </View>
    )
}

const screens2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer} >
        <View><Text>9:41</Text></View>
        <View>
            <Image source={require('../assets/images/iconHead.png')}/>
        </View>
      </View>

      <View style={styles.inforContainer}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <View style={styles.avatarContainer}>
                <Image source={require('../assets/images/avatar.png')}/>
            <View >
                <Text style={styles.hiText}>Hi Twinkle</Text>
                <Text>Have agrate day a head</Text>
            </View>

            </View>

      </View>

      <View style={styles.inputContainer}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder='Search' style={styles.input}></TextInput>
      </View>

      <Item name={data[0].name} email={data[0].email} job={data[0].job}/>
      
    </View>
  )
}

export default screens2

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
    hiText:{
        fontSize: 24,
        fontWeight: '700',
    },
    inforContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
    },

    avatarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 210,
    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 20,
        width: '80%',
        height: 40,
    },
    input:{
        paddingHorizontal: 10,
        height: 40,
        width: '100%'
    },
    jobContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: 300,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 20,
    }
})