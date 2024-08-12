import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyState from '../../components/EmptyState'
import { getUserPost, searchPost, singOut } from '../../lib/appwrite'
import useAppWriteData from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider'
import { icons } from '../../constants'
import InfoBox from '../../components/InfoBox'
import { StatusBar } from 'expo-status-bar'
const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext()
  const { data: posts, refetch } = useAppWriteData(() => getUserPost(user))
  // const { data: posts, refetch } = useAppWriteData(() => getUserPost(user.$id))

  const LogOut = async () => {
    await singOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace('/sing_in')
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <StatusBar style='light' />
      <FlatList
        data={posts}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
          < VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4 ">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={LogOut}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <View className="w-16 h-16 border  border-secondary rounded-xl justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                resizeMode="cover"
                className="w-[90%] h-[90%] rounded-lg"
              />
            </View>
            <InfoBox
              title={user?.username}
              containerStyle='mt-5  border-2 border-red-500'
              titleStyle='text-lg'

            />

            <View className="mt-5 flex flex-row px-2">
              <InfoBox
                title={posts.length || 0}
                subtitle="Posts"
                containerStyle='mr-10'
                titleStyle='text-xl'

              />
              <InfoBox
                title="1.2k"
                subtitle="Followers"
                titleStyle='text-xl'

              />



            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="NO Video Found"
            subtitle="No video found for this search query"
          />
        )}


      />
    </SafeAreaView>
  )
}

export default Profile

