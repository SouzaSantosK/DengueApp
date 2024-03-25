import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Integrante({ user, name, img, link }) {
    const navigation = useNavigation();
    return (
        <View className="relative w-[350px] h-[180px]">
            <Image source={`${img}`} className="w-[350px] h-[180px]" />
            <View className="absolute w-[100%] h-[100%] bg-blue/60 rounded-lg flex justify-center pl-5">
                <Text className="text-white text-2xl font-semibold">
                    {user}
                </Text>
                <Text className="text-white text-2xl font-bold">
                    {name}
                </Text>
                <TouchableOpacity className="bg-blue rounded w-[100px] mt-5" onPress={() => Linking.openURL(link)}>
                    <Text className="px-4 py-2 text-white font-extralight w-[100%] text-center">Github</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}