import { Text, View } from "react-native";
import colors from "tailwindcss/colors";
import { SimpleLineIcons } from '@expo/vector-icons';
import { ChatList } from "../components/ChatList";
import { Config } from "../components/Config";

export function HomeScreen() {
    return (
        <>
            <View className="flex-1 bg-zinc-800">
                <View className="mt-16">

                    <View className="flex flex-row justify-center space-x-16 items-center p-5 mb-3">

                        <View className="flex-col space-y-1">
                            {/* <Text className="text-2xl font-bold text-white">Conta</Text> */}
                            <Text className="text-2xl font-bold text-indigo-400">Conta</Text>
                            <View className="py-[1] bg-indigo-400 rounded-xl" />
                        </View>

                        <View className="flex-col space-y-1">
                            {/* <Text className="text-2xl font-bold text-indigo-400">Messagens</Text> */}
                            <Text className="text-2xl font-bold text-white">Messagens</Text>
                            {/* <View className="py-[1] bg-indigo-400 rounded-xl" /> */}
                        </View>
                    </View>

                    <Config />
                    <ChatList />
                </View>
            </View>
        </>
    )
}