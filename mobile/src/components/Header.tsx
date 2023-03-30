import { Text, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';

export function Header() {
    return (
        <View className="flex flex-row justify-between items-center px-5">
            <Text className="text-3xl font-extrabold text-white">Message</Text>
            <SimpleLineIcons name="options-vertical" size={24} color="white" />
        </View>
    )
}