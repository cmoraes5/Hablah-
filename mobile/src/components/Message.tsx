import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export function Message() {
    const [mssg, setMssg] = useState('');
    const [fromMe, setFromMe] = useState(false);

    function handleFrom() {
        if (fromMe == false) {
            setFromMe(true);
            console.log('Marcado = ', fromMe)
        }
        else {
            setFromMe(false);
        }
    }

    return (

        <>
        <TouchableOpacity 
            className="w-12 h-12 bg-red-500 rounded-lg"
            onPress={handleFrom}
        />
            {
                fromMe === false ?
                    (

                        <View className="flex items-start mt-4">
                            <View className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end">
                                <View>
                                    <Text className="px-4 py-2 ml-3 rounded-lg inline-block rounded-bl-none bg-indigo-400 text-black">
                                        From another
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                    :
                    (
                        <View className="flex items-end mt-4">
                            <View className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <View>
                                    <Text className="px-4 py-2 mr-3 rounded-lg inline-block rounded-br-none bg-zinc-700 text-white">
                                        From me
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
            }
        </>
    )
}