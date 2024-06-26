import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs, useSegments } from 'expo-router'
import { Pressable } from 'react-native'
import { useClientOnlyValue } from '@/components/useClientOnlyValue'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons'
import Colors from '@/constants/Colors'

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name']
    color: string
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
    const segments = useSegments();

    return (
        <GestureHandlerRootView style={{ flex: 1}}>
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: Colors.background,
                        height: 60,
                        paddingBottom: 8,
                        paddingTop: 5,
                    },
                    tabBarActiveTintColor: Colors.primary,
                    tabBarInactiveBackgroundColor: Colors.background,
                    tabBarActiveBackgroundColor: Colors.background,
                    headerStyle: {
                        backgroundColor: Colors.background,
                    },
                    headerShadowVisible: false,
                }}
            >
                <Tabs.Screen
                    name='updates'
                    options={{
                        title: 'Updates',
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons
                                name='update'
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name='calls'
                    options={{
                        title: 'Calls',
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <MaterialCommunityIcons
                                name='phone-outline'
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name='communities'
                    options={{
                        title: 'Communities',
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons
                                name='people'
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name='chats'
                    options={{
                        title: 'Chats',
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons
                                name='chatbubbles'
                                size={size}
                                color={color}
                            />
                        ),
                        tabBarStyle: {
                            backgroundColor: Colors.background,
                            display: segments[2] === '[id]' ? 'none' : 'flex',
                        },
                    }}
                />

                <Tabs.Screen
                    name='settings'
                    options={{
                        title: 'Settings',
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name='cog' size={size} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </GestureHandlerRootView>
    )
}
