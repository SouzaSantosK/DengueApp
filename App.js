import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

import "./global.css";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-blue-400 text-xl">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
