import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
    return (

        <>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='sing_in'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name='sing_up'
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
            <StatusBar backgroundColor='#161622' style='light' />
        </>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})