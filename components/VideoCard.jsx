import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../constants'
import { ResizeMode, Video } from 'expo-av'

const VideoCard = ({ video: { title, creator, avatar, thumbnail, video } }) => {
    // console.log("thumbnail", thumbnail)
    // console.log("creator", creator)
    // console.log("avatar", avatar)
    // console.log("video", video)
    const [play, setplay] = useState(false)
    return (
        <View className="flex-col items-center px-4 mb-14">
            <View className="flex-row items gap-3">
                <View className="justify-center items-center flex-row flex-1">
                    <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
                        <Image
                            source={{ uri: avatar }}
                            className="w-full h-full rounded-lg"
                            resizeMode='cover'
                        />
                    </View>
                    <View className="justify-center flex-1 ml-3 gap-y-1">
                        <Text className="text-white font-psemibold text-sm" numberOfLines={1}>
                            {title}
                        </Text>
                        <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>
                            {creator}
                        </Text>

                    </View>
                </View>
                <View className="pt-2">
                    <Image
                        source={icons.menu}
                        resizeMode='contain'
                        className="w-5 h-5"
                    />

                </View>
            </View>
            {
                play ? (
                    <Video
                        source={{
                            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                            //uri: item.video,
                        }}
                        //source={videosFile.videoTest}
                        className="w-full h-60 rounded-xl mt-3"
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        shouldPlay
                        //isLooping
                        onPlaybackStatusUpdate={(status) => {
                            if (status.didJustFinish) {
                                setplay(false);
                            }
                        }}
                    />
                ) : <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setplay(true)}
                    className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
                >
                    <Image
                        //source={{ uri: thumbnail }}
                        source={images.profile}
                        className="w-full h-full rounded-xl mt-3"
                        resizeMode="cover"
                    />

                    <Image
                        source={icons.play}
                        className="w-12 h-12 absolute"
                        resizeMode="contain"
                    />
                </TouchableOpacity>


            }

        </View >
    )
}

export default VideoCard

const styles = StyleSheet.create({})