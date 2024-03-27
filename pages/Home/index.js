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
        <ActionsButtons icon="syringe" text="Vacinas da Dengue" redirect="Vacinas"/>
        <ActionsButtons icon="mosquito" text="Sobre a Dengue" redirect="Dengue"/>
      </View>
      <View className="mt-[20px]">
        <Text className="font-semibold text-[24px]" >Conteúdos</Text>
        <View className="bg-lightBlue w-auto h-[555px] rounded-[10px] mt-5">
          <ContentsWealth IconGroup={FontAwesome} icon="heartbeat" text="Guia de Vigilância em Saúde - 6º edição" title="Vigilância em Saúde" link="https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-3-6a-edicao/view"/>
          <ContentsWealth IconGroup={MaterialCommunityIcons} icon="baby-face-outline" text="Saúde da Criança" title="Saúde da família" link="https://www.gov.br/saude/pt-br/composicao/saps/estrategia-saude-da-familia"/>
          <ContentsWealth IconGroup={MaterialCommunityIcons} icon="hospital-box" text="Plano Nacional de Saúde 2016-2019" title="Plano de Saúde" link="https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/proadi-sus/sobre-o-programa/arquivos/plano-nacional-saude-2016-2019.pdf/view"/>
          <ContentsWealth IconGroup={FontAwesome6} icon="hospital" text="Financiamento da Saúde – CONASEMS" title="Financiamento da saúde" link="https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/articulacao-interfederativa/cit/pautas-de-reunioes-e-resumos/2016/abril/2-d-mauro_conasems_cti.pdf/view"/>
        </View>
      </View>
    </ScrollView>
  );
}