

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import React from 'react'
import GettingStartedScreen from '../screens/gettingStartedScreen';
import HomeScreen from '../screens/homeScreen';
import DestinationScreen from '../screens/destinationScreen';
export default function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Started'>

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Started" component={GettingStartedScreen} />
                <Stack.Screen name="Destination" component={DestinationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}