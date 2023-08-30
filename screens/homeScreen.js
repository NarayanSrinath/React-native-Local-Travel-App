import { View, Text, SafeAreaView, ScrollView, Platform, TouchableOpacity, Image, TextInput ,StatusBar} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Catogories from '../components/catogories'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import SortCatogaries from '../components/sortcatogories'
import Destination from '../components/destination'
export default function HomeScreen() {
    const ios = Platform.OS == "ios";
    const topMargin = ios? 'mt-3': 'mt-10';
    return (
        <SafeAreaView className={"flex-1  bg-white"}>
        <StatusBar hidden={true}/>
  <ScrollView showsVerticalScrollIndicator={false} className={"space-y-6 "+topMargin}>
                {/* avatar */}
                <View className='mx-5 flex-row justify-between items-center mb-2'>
                    <Text style={{ fontSize: wp(7) }} className='font-bold text-neutral-700'> Let's Discover
                    </Text>
                    <TouchableOpacity>
                        <Image source={require("../assets/images/avatar.png")} style={{ height: wp(12), width: wp(12) }} />
                    </TouchableOpacity>
                </View>
                {/* Search Bar */}

                <View className='mx-5 mb-4'>
                    <View className="flex-row items-center bg-neutral-100 rounded-lg p-4 space-x-2 pl-6">

                        <MagnifyingGlassIcon size={20} strokeWidth={3} color='grey' />
                        <TextInput placeholder='Search Destination'
                            placeholderTextColor={'grey'}
                            className='flex-1 text-base mb-1 pl-1 tracking-wider' />
                    </View>
                </View>

                {/* Catogories */}
                <View className="mb-4">
                    <Catogories />
                </View>
                {/* Sort Catogories */}
                <View className="mb-4">
                    <SortCatogaries />
                </View>

                  {/* Sort Catogories */}
                  <View className="mb-4">
                    <Destination />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}