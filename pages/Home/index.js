import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { useFonts, Figtree_400Regular, Figtree_500Medium, Figtree_700Bold, Figtree_600SemiBold } from '@expo-google-fonts/figtree';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import "../../global.css";
import ActionsButtons from "../../src/components/ActionsButtons";
import ContentsWealth from "../../src/components/ContentsWealth";

export default function Home() {
  return (
    <ScrollView className="px-[40px] py-[80px] bg-whiteBG flex-1">
      <Text className="text-[24px]">
        Olá, <span className="font-semibold">Visitante</span>
      </Text>
      <Image source={ require('../../assets/governo.png') } className="w-[350px] h-[175px] mt-5" />
      <Text className="text-[24px] font-semibold my-[20px]">
        Ações
      </Text>
      <View className="flex justify-between flex-row"> 
        <ActionsButtons icon="syringe" text="Vacinas da Dengue"/>
        <ActionsButtons icon="mosquito" text="Sobre a Dengue"/>
      </View>
      <View className="mt-[20px]">
        <Text className="font-semibold text-[24px]" >Conteúdos</Text>
        <View className="bg-lightBlue w-auto h-[555px] rounded-[10px] mt-5">
          <ContentsWealth IconGroup={FontAwesome} icon="heartbeat" text="Guia de Vigilância em Saúde - 6º edição" title="Vigilância em Saúde"/>
          <ContentsWealth IconGroup={MaterialCommunityIcons} icon="baby-face-outline" text="Saúde da Criança" title="Saúde da família"/>
          <ContentsWealth IconGroup={MaterialCommunityIcons} icon="hospital-box" text="Guia de Vigilância em Saúde - 6º edição" title="Vigilância em Saúde"/>
          <ContentsWealth IconGroup={FontAwesome6} icon="hospital" text="Guia de Vigilância em Saúde - 6º edição" title="Vigilância em Saúde"/>
        </View>
      </View>
    </ScrollView>
  );
}