import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { HomeScreen } from "../screens/HomeScreen"
import { ChatScreen } from "../screens/ChatScreen";
// import { Config } from "../screens/Config";
// import { Cadastro } from "../screens/Cadastro";

export function StackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            
            <Screen
                name="home"
                component={HomeScreen}
            />

            <Screen
                name="chatScreen"
                component={ChatScreen}
            />
        </Navigator>
    )
}