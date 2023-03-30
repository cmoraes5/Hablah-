import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

type Props = {
    id: string;
    name: string;
    message: string;
}

export function Chat({ name, message }: Props)   {
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate('chatScreen')}
        >

            <View className="flex-1 mx-7 flex-row border-b-2 border-zinc-800 mt-4 py-5 items-center justify-between">

                <View className="flex-row items-center">
                    <Image
                        className="h-16 w-16 rounded-full"
                        source={{ uri: 'https://source.unsplash.com/random/' }}
                    />

                    <View className="ml-3 flex-column justify-between space-y-1">
                        <Text className="font-extrabold text-base color-white">{name}</Text>
                        <Text className="font-regular text-sm color-white">{message}</Text>
                    </View>
                </View>

                <View className="w-2 h-2 bg-indigo-400 rounded-full" />
            </View>
        </TouchableOpacity>
    )
}