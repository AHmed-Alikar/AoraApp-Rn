import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { Video } from 'expo-av'
import { icons } from '../../constants'

const CreateNew = () => {
    const [uploading, setUploading] = useState(false)
    const [form, setform] = useState({
        title: "",
        video: "",
        thumbnail: "",
        prompt: ""

    })
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView className="px-4 my-6">
                <Text className="text-2xl text-gray-100 font-psemibold">
                    upload Video
                </Text>
                <FormField
                    title="Video Title"
                    value={form.title}
                    placeholder="Give your video a catch title"
                    handleChangeText={(e) => setform({
                        ...form,
                        title: e
                    })}
                    otherStyles="mt-10"
                />
                <View className="mt-6 space-y-2">
                    <Text className="text-base text-gray-100 font-pmedium">
                        Upload Video
                    </Text>
                    <TouchableOpacity>
                        {
                            form.video ? (
                                <Video
                                    source={{ uri: form.video.uri }}
                                    className="w-full h-64 rounded-2xl "
                                    useNativeControls
                                    isLooping
                                />
                            ) : (
                                <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                                    <View className="w-14 h-14 border border-secondary-100 justify-center items-center ">
                                        <Image
                                            source={icons.upload}
                                            resizeMode='contain'
                                            className="w-1/2 h-1/2"
                                        />
                                    </View>
                                </View>
                            )
                        }
                    </TouchableOpacity>


                </View>
                <View className="mt-7 space-y-2">
                    <Text className="text-base text-gray-100 font-pmedium">
                        Thumblain image
                    </Text>
                    <TouchableOpacity>
                        {
                            form.thumbnail ? (
                                <Image
                                    source={{ uri: form.thumbnail.uri }}
                                    resizeMethod='cover '
                                    className="w-full h-64 rounded-2xl"
                                />
                            ) : (
                                <View className="
                                    w-full 
                                    h-16 px-4
                                    bg-black-100
                                    rounded-2xl
                                    justify-center
                                    items-center
                                    border-2 border-black-200
                                    flex-row 
                                    space-x-2
                                    "
                                >

                                    <Image
                                        source={icons.upload}
                                        resizeMode='contain'
                                        className="w-5 h-5"
                                    />

                                </View>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default CreateNew

const styles = StyleSheet.create({})