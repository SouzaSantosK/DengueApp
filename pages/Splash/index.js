import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
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
    <View className="flex-1 justify-center items-center bg-white" >
      <Image source={ require('../../assets/splash.png') } className="w-72 h-72" />
    </View>
  );
}