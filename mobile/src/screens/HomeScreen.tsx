import { Text, View } from "react-native";
import colors from "tailwindcss/colors";
import { SimpleLineIcons } from '@expo/vector-icons';
import { ChatList } from "../components/ChatList";
import { Config } from "../components/Config";

export function HomeScreen() {
    return (
        <>
            <ChatList />
            <Config />
        </>
    )
}