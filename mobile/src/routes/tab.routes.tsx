import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar } from 'react-native-tab-view';
import colors, { zinc } from 'tailwindcss/colors';
import { ChatList } from '../components/ChatList';
import { Config } from '../components/Config';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const navTheme = DefaultTheme;
navTheme.colors.background = colors.zinc[900];

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function TopTabs() {
    return (
        <Navigator
            tabBarPosition="top"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: colors.indigo[400],
                tabBarInactiveTintColor: colors.zinc[500],
                tabBarBounces: true,

                tabBarIndicatorStyle: {
                    backgroundColor: colors.indigo[400],
                    // backgroundColor: "transparent",
                },

                tabBarPressColor: "transparent",

                tabBarStyle: {
                    backgroundColor: colors.zinc[800],
                    
                    paddingTop: 50,

                    borderWidth: 0,
                    elevation: 0,
                },

                tabBarLabelStyle: {
                    fontWeight: "bold",
                    fontSize: 24,
                    textTransform: 'none'
                },
            })}
        >
            <Screen
                name="config"
                component={Config}
                options={{
                    tabBarLabel: 'Config'
                }}
            />

            <Screen
                name="chatList"
                component={ChatList}
                options={{
                    tabBarLabel: 'Conversas',
                }}
            />

        </Navigator>
    );
}