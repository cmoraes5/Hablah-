import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatList } from '../components/ChatList';
import { Config } from '../components/Config';

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function TopTabs() {
    return (
        <Navigator>
            
            <Screen
                name="chatList"
                component={ChatList}
            />

            <Screen
                name="config"
                component={Config}
            />
        </Navigator>
    );
}