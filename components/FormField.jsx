import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-white text-base text-gray-100">
                {title}
            </Text>
            {/* inputField */}
            <View className="w-full h-16 flex-row px-4 bg-black-100 rounded-2xl border-2 border-black-200
                focus:border-secondary
                
                items-center
            ">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />
                {title == "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6 "
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}

            </View>
        </View>
    )
}

export default FormField

const styles = StyleSheet.create({})