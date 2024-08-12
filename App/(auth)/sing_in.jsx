import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { images } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
const SingIn = () => {
    const { setUser, setIsLogged } = useGlobalContext();
    const [isSubmiting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async () => {
        if (form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
        }
        setSubmitting(true);
        try {
            await signIn(form.email, form.password);
            const result = await getCurrentUser();
            setUser(result);
            setIsLogged(true);
            Alert.alert("Success", "User signed in successfully");
            router.replace("/home");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                {/* container */}
                <View
                    className="w-full min-h-[85vh] justify-center px-4 my-6"
                >
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className="w-[115px] h-[35px]"
                    />
                    <Text className="text-white text-2xl text-semibold font-psemibold mt-10">
                        Login in to Aora
                    </Text>
                    <FormField
                        title="Email"
                        value={form.email}
                        keyboardType="email-address"
                        otherStyles="mt-7"
                        placeholder=""
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        otherStyles="mt-7"
                        placeholder=""
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                    />
                    <CustomButton
                        title="Sing-in"
                        handleSubmit={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmiting}
                    />

                    {/* dont have account box*/}
                    <View className="justify-center pt-5 flex-row gap-2">

                        <Text className="text-gray-100 text-lg font-pregular">
                            Don't have account
                        </Text>
                        <Link
                            href="/sing_up"
                            className='text-secondary text-lg font-psemibold'>
                            Sing up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SingIn

const styles = StyleSheet.create({})