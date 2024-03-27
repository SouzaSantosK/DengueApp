import { Text, View, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function ContentsWealth({ IconGroup, icon, title, text, link }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity className="mx-[25px] mt-[25px] pb-[20px] flex flex-row justify-between items-center border-b border-black/10"  onPress={() => Linking.openURL(link)}>
          <View className="bg-lightBlue w-[195px] h-[90px] flex gap-[6px]">
            <Text className="font-semibold text-[14px] text-blue">{title}</Text>
            <Text className="font-normal text-[16px]">{text}</Text>
            <Text className="font-semibold text-[12px] text-blue/60">Ver mais &gt;</Text>
          </View>
          <View className="bg-blue/10 w-20 h-20 flex justify-center items-center rounded-lg border border-blue">
            <IconGroup name={icon} size={40} color="#0C73D3"/>
          </View>
        </TouchableOpacity>
    )
}