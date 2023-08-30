import { View, Text, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native';

export default function GettingStartedScreen() {
    const navigation =useNavigation();
    return (
        <View className="flex-1 items-center justify-end">
            {/* background Image */}
            <Image
                source={require('../assets/images/welcome.png')}
                className='h-full w-full absolute' />
            {/* content & gradient */}
            <View className='p-5 pb-10 space-y-8'>
            <LinearGradient
                colors={['transparent','rgba(3,105,161,0.5)']}
                style={{width: wp(100),height: hp(60)}}
                start={{x:0.5, y:0}}
                end={{x:0.5,y:1}}
                className='absolute bottom-0'/>
                <View className='space-y-3'>
                    <Text className='text-white font-weight: 300 text-5xl' style={{ fontSize: wp(10) }}>Traveling Made easy!</Text>
                    <Text className='text-neutral-shade-300 font-medium text-xl' style={{ fontSize: wp(5) }}>Experience the world's best adventure around with us.</Text>
                </View>
                <TouchableOpacity className="bg-orange-300 mx-auto p-3 px-12 rounded-xl" onPress={()=>navigation.navigate('Home')}>
                   
                    <Text className="text-black font-bold" style={{ fontSize: wp(5.5) }}>Let's go!</Text>
                </TouchableOpacity>
               
            </View>
        </View>
    )
}