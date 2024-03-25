import { Text, View, TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

export default function ActionsButtons({ icon, text, redirect }) {
  const navigation = useNavigation();
    return (
        <TouchableOpacity className="w-[155px] h-[194px]" onPress={() => navigation.navigate(redirect)}>
          <View className="bg-lightBlue w-[155px] h-[150px] flex justify-center items-center rounded">
            <FontAwesome6 name={icon} size={73} color="#0C73D3" />
          </View>
          <Text className="font-semibold text-[18px] my-[10px] text-center">{text}</Text>
        </TouchableOpacity>
    )
}