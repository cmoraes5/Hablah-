import colors from "tailwindcss/colors";
import { Chat } from "./Chat";
import { Entypo } from '@expo/vector-icons';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform
} from "react-native";


export function ChatList() {

    return (<>


        <View
            className="
                bg-zinc-900 
                flex flex-col 
                h-screen"
        >

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <View className="bg-zinc-800 mx-4 mt-7 px-4 h-12 flex flex-row items-center justify-between rounded-full">
                    <TextInput
                        className="flex flex-row justify-center text-white text-sm font-regular"
                        placeholder="Placeholder...."
                        placeholderTextColor={colors.zinc[500]}
                    >
                    </TextInput>

                    <Entypo name="magnifying-glass" size={24} color={colors.zinc[500]} />
                </View>
            </KeyboardAvoidingView>

            <ScrollView
                className="mt-2"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 200 }}
            >

                <Chat
                    id="1"
                    name="Caio"
                    message="Eaiiii, tudo bem?"
                />
                <Chat
                    id="13"
                    name="Carol"
                    message="Oiee!"
                />
                <Chat
                    id="2"
                    name="Fulano"
                    message="Isso aí, vai à caça!"
                />
                <Chat
                    id="3"
                    name="Ciclano"
                    message="Oii..."
                />
                <Chat
                    id="4"
                    name="Pedro"
                    message="É o projeto"
                />
                <Chat
                    id="5"
                    name="Yasmin"
                    message="Tudo bem sim"
                />
                <Chat
                    id="6"
                    name="Outra pessoa"
                    message="Eita, mas e depois?"
                />
                <Chat
                    id="7"
                    name="Mais uma"
                    message="Bem te vi lá"
                />
                <Chat
                    id="8"
                    name="Loja tal"
                    message="Olá, desculpe a demora, oque gostaria?"
                />
                <Chat
                    id="9"
                    name="Suporte"
                    message="Está com a tela aberta?"
                />
                <Chat
                    id="10"
                    name="Tal pessoa"
                    message="Isso é"
                />
                <Chat
                    id="11"
                    name="Aquele cara"
                    message="Bora"
                />
                <Chat
                    id="12"
                    name="Ian"
                    message="Aham"
                />


            </ScrollView>


        </View>
    </>
    )
}