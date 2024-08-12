// import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import FormField from '../../components/FormField'
// import { images } from '../../constants'
// import CustomButton from '../../components/CustomButton'
// import { Link, router } from 'expo-router'
// import { createUser } from '../../lib/appwrite'
// import { Account, ID } from 'react-native-appwrite'

// const SingUp = () => {
//     const [form, setForm] = useState({
//         email: "",
//         password: "",
//         userName: ""
//     })


//     const [isSubmiting, setIssubmiting] = useState(false)


//     const Submit = async () => {
//         if (form.email === "" || form.password === "" || form.userName === "") {
//             Alert.alert("Error", "Please enter fill these fiedls")
//         }
//         setIssubmiting(true)

//         try {

//             const result = await createUser(form.email, form.password, form.userName)
//             router.replace("/home")
//         } catch (error) {
//             console.log("submiting Error", error)
//             Alert.alert("Error", error.message)

//         } finally {
//             setIssubmiting(false)
//         }
//     };
//     return (
//         <SafeAreaView className="bg-primary h-full">
//             <ScrollView>
//                 {/* container */}
//                 <View
//                     className="w-full min-h-[85vh] justify-center px-4 my-6"
//                 >
//                     <Image
//                         source={images.logo}
//                         resizeMode='contain'
//                         className="w-[115px] h-[35px]"
//                     />
//                     <Text className="text-white text-2xl text-semibold font-psemibold mt-10">
//                         Sing up to Aora
//                     </Text>
//                     <FormField
//                         title="Username"
//                         value={form.userName}
//                         // keyboardType="email-address"
//                         otherStyles="mt-7"
//                         placeholder=""
//                         handleChangeText={(e) => setForm({ ...form, userName: e })}
//                     />
//                     <FormField
//                         title="Email"
//                         value={form.email}
//                         keyboardType="email-address"
//                         otherStyles="mt-7"
//                         placeholder=""
//                         handleChangeText={(e) => setForm({ ...form, email: e })}
//                     />

//                     <FormField
//                         title="Password"
//                         value={form.password}
//                         otherStyles="mt-7"
//                         placeholder=""
//                         handleChangeText={(e) => setForm({ ...form, password: e })}
//                     />
//                     <CustomButton
//                         title="Sing-Up"
//                         handleSubmit={Submit}
//                         containerStyles="mt-7"
//                         isLoading={isSubmiting}
//                     />

//                     {/* dont have account box*/}
//                     <View className="justify-center pt-5 flex-row gap-2">

//                         <Text className="text-gray-100 text-lg font-pregular">
//                             Have an Account Already
//                         </Text>
//                         <Link href="/sing_in" className='text-secondary text-lg font-psemibold'>Sing In</Link>


//                     </View>

//                 </View>

//             </ScrollView>

//         </SafeAreaView>
//     )
// }

// export default SingUp


// const styles = StyleSheet.create({})
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import { images } from '../../constants';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser, signIn } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const SingUp = () => {
    const { setUser, setIsLogged } = useGlobalContext();
    const [form, setForm] = useState({
        email: '',
        password: '',
        userName: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submit = async () => {
        if (form.email === '' || form.password === '' || form.userName === '') {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        setIsSubmitting(true);

        try {
            const newAccount = await createUser(form.email, form.password, form.userName);
            setUser(newAccount);
            setIsLogged(true);

            router.replace("/home");
        } catch (error) {
            console.log('Submission Error', error);
            Alert.alert('Error', error.message);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                {/* container */}
                <View className="w-full min-h-[85vh] justify-center px-4 my-6">
                    <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
                    <Text className="text-white text-2xl text-semibold font-psemibold mt-10">Sign up to Aora</Text>
                    <FormField
                        title="Username"
                        value={form.userName}
                        otherStyles="mt-7"
                        handleChangeText={(e) => setForm({ ...form, userName: e })}
                    />
                    
                    <FormField
                        title="Email"
                        value={form.email}
                        keyboardType="email-address"
                        otherStyles="mt-7"
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        otherStyles="mt-7"
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                    />
                    <CustomButton
                        title="Sign Up"
                        handleSubmit={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />
                    {/* Don't have an account box*/}
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-gray-100 text-lg font-pregular">
                            Have an Account Already
                        </Text>
                        <Link
                            href="/sign_in"
                            className="text-secondary text-lg font-psemibold"
                        >
                            Sign In
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SingUp;
