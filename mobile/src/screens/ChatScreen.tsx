import { useEffect, useState } from "react";
import {
    Button,
    FlatList,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Platform,
    KeyboardAvoidingView,
    SectionList,
    Image
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import colors from "tailwindcss/colors";


import { messageList } from '../vendors/Messages/fakapi';
import { BackButton } from "../components/BackButton";
import Logo from "../../assets/svg/Logo.svg"

export function ChatScreen() {
    const [mssgList, setMssgList] = useState(messageList);
    const [mssg, setMssg] = useState('');

    return (
        <>
            <View className="bg-zinc-900 flex-1">
                <View className="flex-row items-center bg-zinc-800 px-4 pt-16 pb-6 rounded-b-3xl">
                    
                    <BackButton />

                    <View className="flex-1 flex-row items-center">
                        <Image
                            className="h-14 w-14 rounded-full ml-8"
                            source={{ uri: 'https://source.unsplash.com/random/' }}
                        />
                    
                        <View className="ml-4">
                            <Text className="font-extrabold text-base color-white">Caio Moraes</Text>
                            <Text className="font-regular text-sm text-indigo-400 ">Online</Text>
                        </View>
                    </View>
                </View>

                {/* <FlatList
                    className="mt-4"
                    data={messages}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <View >
                            <Text className="color-white">Text</Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text className="color-zinc-500 font-medium text-lg text-center">
                            Ainda não há mensagens...
                        </Text>
                    )}
                /> */}

                <ScrollView className="py-2"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 100 }}
                >

                    <View className="flex items-start mt-4">
                        <View className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end">
                            <View>
                                <Text className="px-4 py-2 ml-3 rounded-lg inline-block rounded-bl-none bg-indigo-400 text-black">
                                    Lorem Impsumasasfasasasfsfasfa
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex items-end mt-4">
                        <View className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <View>
                                <Text className="px-4 py-2 mr-3 rounded-lg inline-block rounded-br-none bg-zinc-700 text-white">
                                    {mssg}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* <Message/> */}

                </ScrollView>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="py-5 flex-row justify-between items-center mx-4">
                    <TextInput
                        className="bg-zinc-800 flex-1 px-4 h-12 color-white rounded-full mr-2 text-sm font-regular"
                        placeholder="Placeholder..."
                        value={mssg}
                        onChangeText={setMssg}
                        placeholderTextColor={colors.zinc[500]}
                    />

                    <TouchableOpacity className="bg-indigo-400 h-12 w-12 rounded-full items-center justify-center">
                        <Ionicons name="send" size={24} color="white" />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </>
    )
}