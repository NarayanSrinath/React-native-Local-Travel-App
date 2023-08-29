

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import React from 'react'
import GettingStartedScreen from '../screens/gettingStartedScreen';
import HomeScreen from '../screens/homeScreen';
export default function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Started" component={GettingStartedScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}