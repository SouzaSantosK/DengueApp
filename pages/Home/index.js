import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import "../../global.css";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-emerald-600">
      <Text className="text-blue-400 text-xl">
        Index
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}