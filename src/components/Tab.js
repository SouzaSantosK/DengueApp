import { Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts, Figtree_400Regular, Figtree_500Medium, Figtree_700Bold, Figtree_600SemiBold } from '@expo-google-fonts/figtree';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from '../../pages/Home';
import Vacinas from '../../pages/Vacinas';
import Dengue from '../../pages/Dengue';
import Devs from '../../pages/Devs';
import ItemTab from "./ItemTab";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const [fontLoaded] = useFonts({
        Figtree_400Regular,
        Figtree_500Medium,
        Figtree_700Bold,
        Figtree_600SemiBold
    });
    if (!fontLoaded) {
        return null;
    }
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false
            }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#ffffff',
                    height: 80,
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <ItemTab IconGroup={MaterialCommunityIcons} icon="home-heart" text="Home" focused={focused} />
                )
            }} />
            <Tab.Screen name="Vacinas" component={Vacinas} options={{
                tabBarIcon: ({ focused }) => (
                    <ItemTab IconGroup={MaterialIcons} icon="vaccines" text="Vacinas" focused={focused} />
                )
            }} />
            <Tab.Screen name="Dengue" component={Dengue} options={{
                tabBarIcon: ({ focused }) => (
                    <ItemTab IconGroup={FontAwesome6} icon="mosquito" text="Dengue" focused={focused} />
                )
            }} />
            <Tab.Screen name="Devs" component={Devs} options={{
                tabBarIcon: ({ focused }) => (
                    <ItemTab IconGroup={Ionicons} icon="person" text="Devs" focused={focused} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default Tabs;