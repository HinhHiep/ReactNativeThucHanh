import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from '../screens/screens1'
import Screen2 from '../screens/screens2'

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
    >
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  )
}

export default index

const styles = StyleSheet.create({})