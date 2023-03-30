import { View } from "react-native";
import { NavigationContainer, TabRouter } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";
import { ChatProvider } from "../contexts/ChatContext";

export function Routes(){
    return(
        <View className="flex-1 bg-background">
            <NavigationContainer>

                <ChatProvider>
                    <StackRoutes />
                </ChatProvider>

            </NavigationContainer>
        </View>
    )
}