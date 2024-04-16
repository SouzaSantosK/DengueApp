import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
  Figtree_600SemiBold,
} from "@expo-google-fonts/figtree";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Vacinas from "./pages/Vacinas";
import Dengue from "./pages/Dengue";
import Devs from "./pages/Devs";

import Tabs from "./src/components/Tab";

const Stack = createStackNavigator();

const Stacks = () => {
  const [fontLoaded] = useFonts({
    Figtree_400Regular,
    Figtree_500Medium,
    Figtree_700Bold,
    Figtree_600SemiBold,
  });
  if (!fontLoaded) {
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          title: "Splash",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="Vacinas"
        component={Vacinas}
        options={{
          title: "Vacinas",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="Dengue"
        component={Dengue}
        options={{
          title: "Dengue",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="Devs"
        component={Devs}
        options={{
          title: "Devs",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          title: "Tabs",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
