import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1  from '../screens/Screen1';
import Screen2  from '../screens/Screen2';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{
          headerShown: false,
        }}
    >
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  )
}

export default index

const styles = StyleSheet.create({})