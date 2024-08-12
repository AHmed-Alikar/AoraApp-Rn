import { Alert, FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPost, getLatestPosts } from '../../lib/appwrite'
import useAppWriteData from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider'
const Home = () => {
    const { user, setUser, setIsLoggedIn } = useGlobalContext()
    const { data: posts, refetch } = useAppWriteData(getAllPost)
    const { data: latestPost } = useAppWriteData(getLatestPosts)
    console.log("Posts All11", posts)
    console.log("latestPost", latestPost)
    const [refreshing, setRefreshing] = useState(false)



    const onRefreshing = async () => {
        setRefreshing(true)
        //re call a video -- if any video appears
        await refetch()
        setRefreshing(false)
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={posts}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    < VideoCard video={item} />
                )}
                ListHeaderComponent={() => (
                    <View className="flex my-6 px-4 space-y-6">
                        <View className="flex justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-pmedium text-sm text-gray-100">
                                    Welcome Back,
                                </Text>
                                <Text className="text-2xl font-psemibold text-white">
                                    {user?.username}
                                </Text>
                            </View>

                            <View className="mt-1.5">
                                <Image
                                    source={images.logoSmall}
                                    className="w-9 h-10"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>

                        <SearchInput />

                        <View className="w-full flex-1 pt-5 pb-8">
                            <Text className="text-lg font-pregular text-gray-100 mb-3">
                                Latest Videos
                            </Text>
                            <Trending posts={latestPost ?? []} />
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="NO Video Found"
                        subtitle="Be first one to upload a video"

                    />
                )}

                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})