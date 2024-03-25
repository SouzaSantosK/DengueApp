import { Text, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function SectionVacina({ path, title, children }) {
    const navigation = useNavigation();

    return (
        <View className="bg-white border-2 border-blue/20 w-[330px] h-auto mx-auto rounded-[20px] mt-[50px] p-[20px] flex items-center">
            <View className="mb-6 flex flex-row gap-3">
                <FontAwesome6 name="syringe" size={35} color="#0C73D3" />
                <Text className="text-blue font-semibold text-[26px]">{title}</Text>
            </View>
            <View>
                <Text className="text-[16px]">
                    {children}
                </Text>
            </View>
            <View className="pt-5 px-3">
                <Image source={`${path}`} className="w-[290px] h-[140px]"/>
            </View>
        </View>
    )
}
