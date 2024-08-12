import { ActivityIndicator, ActivityIndicatorBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ title,
    handleSubmit,
    containerStyles,
    textStyles,
    isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handleSubmit}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl 
                min-h-[62px]
                flex flex-row
                items-center
                justify-center
                    ${containerStyles}
                    ${isLoading ? "opacity-50" : ""}
                `}
            disabled={isLoading}

        >
            <Text className={`Text-primary font-psemibold text-lg ${textStyles}`}>
                {title}
            </Text>
            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({})