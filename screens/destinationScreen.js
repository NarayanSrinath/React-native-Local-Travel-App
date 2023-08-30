import { View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { ArrowLeftIcon, ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme'
export default function DestinationScreen(props) {
    const item = props.route.params;
    const ios = Platform.OS == "ios";
    const topMargin = ios ? 'mt-3' : 'mt-10';
    const navigation = useNavigation();
    const [isFav, toggleFav] = useState(false);
    return (

        <View className='bg-white flex-1'>

            <Image source={item.image} style={{ width: wp(100), height: wp(129) }} />
            <StatusBar hidden={true} />
            {/* back button */}
            <SafeAreaView className={'flex-row justify-between items-center w-full absolute pt-10'}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className='p-2 rounded-full ml-4'
                    style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                >
                    <ArrowLeftIcon size={wp(6)} strokeWidth={4} color='black' />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => toggleFav(!isFav)}
                    className='p-2 rounded-full mr-4'
                    style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                >
                    <HeartIcon size={wp(6)} color={isFav ? "red" : "white"} />
                </TouchableOpacity>
            </SafeAreaView>
            {/* tiltle & des & booking button */}

            <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                className='px-5 flex-1 justify-between bg-white pt-8 -mt-14'>
                <ScrollView showsVerticalScrollIndicator={false}
                    className="space-y-5">
                    <View className='flex-row justify-between items-start'>
                        {/* title */}
                        <Text
                            style={{ fontSize: wp(6) }}
                            className="font-bold flex-1 text-neutral-700">
                            {item?.title}
                        </Text>

                        {/* price */}
                        <Text style={{ fontSize: wp(6), color: theme.text }}
                            className='font-semibold'
                        >
                            ${item?.price}
                        </Text>
                    </View>

                    {/* long decsription */}

                    <Text
                        style={{ fontSize: wp(3.8) }}
                        className='text-neutral-700 tracking-wide mb-2'
                    >
                        {item.longDescription}
                    </Text>

                    {/* other details */}
                    <View className="flex-row justify-between mx-1">
                        {/* duration */}
                        <View className='flex-row space-x-2 items-start'>
                            <ClockIcon size={wp(7)} color='skyblue' />
                            <View className='flex space-y-2'>
                                <Text
                                    style={{ fontSize: wp(4.5) }}
                                    className='font-bold text-neutral-700'>{item.duration}</Text>
                                <Text className='text-neutral-600 tracking-wide'>Duration</Text>
                            </View>
                        </View>
                        {/* weather */}
                        <View className='flex-row space-x-2 items-start'>
                            <SunIcon size={wp(7)} color='orange' />
                            <View className='flex space-y-2'>
                                <Text
                                    style={{ fontSize: wp(4.5) }}
                                    className='font-bold text-neutral-700'>{item.weather}</Text>
                                <Text className='text-neutral-600 tracking-wide'>Sunny</Text>
                            </View>
                        </View>
                        {/* distance */}
                        <View className='flex-row space-x-2 items-start'>
                            <MapPinIcon size={wp(7)} color='#f87171' />
                            <View className='flex space-y-2'>
                                <Text
                                    style={{ fontSize: wp(4.5) }}
                                    className='font-bold text-neutral-700'>{item.distance}</Text>
                                <Text className='text-neutral-600 tracking-wide'>Distance</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>

                {/* book now button */}

                <TouchableOpacity
                style={{backgroundColor: theme.bg(0.7),height:wp(15),width:wp(50)}}
                 className='mb-6 mx-auto flex justify-center items-center rounded-xl'>
                    <Text className='text-black font-bold' style={{fontSize:wp(5.5)}}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}