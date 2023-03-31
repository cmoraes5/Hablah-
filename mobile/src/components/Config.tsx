import {
    ScrollView,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import colors from "tailwindcss/colors";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useColorScheme } from "nativewind";


export function Config() {
    return (
        <>
        <View
            className="
                bg-zinc-900 
                flex flex-col 
                h-screen"
        >

                <View className="mt-10">

                    <View className="ml-8 py-4 flex-row">
                        <FontAwesome5 name="key" size={48} color={colors.indigo[400]} />


                        <View className="ml-5 justify-center flex-col space-y-3">
                            <Text className="text-white text-base font-extrabold">Conta</Text>
                            <Text className="text-zinc-500 text-sm font-regular">Configurações de conta, etc...</Text>
                        </View>
                    </View>



                    <View className="ml-8 py-4 flex-row">
                        <Feather name="moon" size={48} color={colors.indigo[400]} />


                        <View className="ml-5 justify-center flex-col space-y-3">
                            <Text className="text-white text-base font-extrabold">Tema</Text>
                            <Text className="text-zinc-500 text-sm font-regular">Tema claro e escuro</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}