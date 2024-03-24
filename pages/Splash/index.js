import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import "../../global.css";

export default function Splash() {
  const navigation = useNavigation()

  function loading(){
    setTimeout(() => {  
      navigation.navigate('Tabs');      
    }, 2000)
  }
  loading();

  return (
    <View className="flex-1 justify-center items-center bg-emerald-600">
      <Text className="text-blue-400 text-xl">
        loading
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}