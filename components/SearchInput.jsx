import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { router, usePathname } from 'expo-router'
const SearchInput = (initialQuery) => {
    const pathName = usePathname()
    const [query, setQuery] = useState(initialQuery || '')
    return (
        // {/* inputField */}
        <View className="w-full h-16 flex-row px-4 bg-black-100 rounded-2xl border-2 border-black-200
                focus:border-secondary
                items-center
                space-x-4
            ">
            <TextInput
                className="text-base mt-0.5 flex-1 text-white font-pregular"
                value={query}
                placeholder="Search for a video topic"
                placeholderTextColor="#CDCDE0"
                onChangeText={(e) => setQuery(e)}
            // {...props}
            />
            <TouchableOpacity
                onPress={() => {
                    console.log("Search trying")
                    if (query === "") {
                        return Alert.alert("Missing Query", "plaese input something to search result accross database")
                    }

                    if (pathName.startsWith("/search")) {
                        return router.setParams({ query })
                    }
                    else {
                        router.push(`/search/${query}`)
                    }
                    // if (pathName.startsWith("/search")) router.setParams({ query });
                    // else router.push(`/search/${query}`);
                }

                }
            >
                <Image
                    source={icons.search}
                    resizeMode='contain'
                    className="w-5 h-5"
                />
            </TouchableOpacity>
        </View>

    )
}

export default SearchInput

const styles = StyleSheet.create({})