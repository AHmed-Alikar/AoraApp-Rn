import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

const EmptyState = ({ title, subtitle }) => {
    return (
        <View className="justify-center items-center px-4">
            <Image
                source={images.empty}
                resizeMode='contain'
                className="w-[270px] h-[215px]"
            />
            <Text className="text-xl font-semibold text-center text-gray-100 mt-2">
                {title}
            </Text>
            <Text className="text-gray-100 font-pmedium text-sm">
                {subtitle}
            </Text>
            <CustomButton
                title="Create  video "
                handleSubmit={() => router.push('/createNew')}
                containerStyles="w-full my-5"
            />
        </View>
    )
}

export default EmptyState

const styles = StyleSheet.create({})