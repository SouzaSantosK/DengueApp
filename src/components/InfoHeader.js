import { Text, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function InfoHeader({ path, title, children }) {
    const navigation = useNavigation();
    return (
        <View>
            <Image source={ path } className="w-[100%] h-[175px]" />
            <View className="w-[350px] mx-auto">
              <Text className="text-blue font-bold text-[45px] w-[240px] absolute top-[-125px]">{ title }</Text>
              <Text className="text-[16px] mt-5">
                {children}
              </Text>
            </View>
        </View>
    )
}