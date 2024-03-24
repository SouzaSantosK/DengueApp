import { Text, View } from "react-native";

export default function ItemTab({ IconGroup, icon, text, focused }) {
    return (
        <View className="flex items-center justify-center">
            <IconGroup name={icon} size={30} color={focused ? '#0988FF' : "#777777"} />
            <Text
                style={{
                    color: focused ? '#0988FF' : "#777777",
                    fontFamily: focused ? 'Figtree_600SemiBold' : 'Figtree_400Regular'
                }}
            >{text}
            </Text>
        </View>
    )
}