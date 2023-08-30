import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useState } from 'react';
import { destinationData } from '../constents'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { HeartIcon } from 'react-native-heroicons/solid'
import {useNavigation} from '@react-navigation/native';
export default function Destination() {
    const navigation =useNavigation();
    return (
        <View className='mx-4 flex-row justify-between flex-wrap mb-10'>
            {
                destinationData.map((item, index) => {
                    return (
                        <DestinationCard navigation={navigation} item={item} key={index} />
                    )
                })
            }
        </View>
    )
}

const DestinationCard = ({ item, navigation }) => {
    const [isFav, toggleFav] = useState(false);
    return (
      
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Destination',{...item})}
        style={{ width: wp(44), height: wp(65) }}
            className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
            <Image source={item.image}
                style={{ width: wp(44), height: wp(65), borderRadius: 35 }} className='absolute' />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.5)']}
                style={{ width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className='absolute bottom-0' />
            {/* HeartIcon */}
            <TouchableOpacity
                onPress={() => toggleFav(!isFav)}
                style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} className='absolute top-1 right-3 rounded-full p-3'>
                <HeartIcon size={wp(4)} color={isFav ? "red" : "white"} />
            </TouchableOpacity>
            <Text style={{ fontSize: wp(4) }} className='text-orange-700 font-semibold'>{item.title}</Text>
            <Text style={{ fontSize: wp(3.5) }} className='text-white'>{item.shortDescription}</Text>
        </TouchableOpacity>
    )
}