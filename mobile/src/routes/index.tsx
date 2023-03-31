import { View } from "react-native";
import { NavigationContainer, TabRouter } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";
import { ChatProvider } from "../contexts/ChatContext";
import { TopTabs } from "./tab.routes";

export function Routes() {
    return (
        <NavigationContainer>

            <ChatProvider>
                <TopTabs />
            </ChatProvider>

        </NavigationContainer>
    )
}