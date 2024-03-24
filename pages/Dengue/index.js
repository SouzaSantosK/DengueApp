import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import "../../global.css";

export default function Dengue() {
  return (
    <View className="flex-1 justify-center items-center bg-emerald-600">
      <Text className="text-blue-400 text-xl">
        dengue
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}