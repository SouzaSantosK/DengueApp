import { Text, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function SectionDengue({ path, title, children }) {
    const navigation = useNavigation();

    return (
        <View className="w-[350px] mx-auto mt-[50px]">
            <View className="mb-6 flex flex-row gap-3">
                <Text className="text-blue font-semibold text-[26px]">{title}</Text>
            </View>
            <View>
                <Text className="text-[16px]">
                    {children}
                </Text>
            </View>
            <View className="mt-[15px] flex items-center">
                <Image source={`${path}`} className="w-[350px] h-[150px] rounded-lg"/>
            </View>
        </View>
    )
}
