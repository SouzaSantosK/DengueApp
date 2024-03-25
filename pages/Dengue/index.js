import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";

import InfoHeader from "../../src/components/InfoHeader";

import "../../global.css";
import SectionDengue from "../../src/components/SectionDengue";

export default function Dengue() {
  return (
    <ScrollView className="bg-whiteBG flex-1 pb-32">
        <InfoHeader path={require('../../assets/dengue.png')} title="Sobre a dengue">
          A Dengue é uma doença febril aguda causada por um vírus, que pode provocar sintomas como febre alta, dor de cabeça, manchas vermelhas na pele e, em casos graves, hemorragias.
        </InfoHeader>
        <SectionDengue title="Transmissão" path="../../assets/aedes.png">
        O principal transmissor da Dengue é o mosquito Aedes aegypti, que se infecta ao picar uma pessoa contaminada e pode transmitir o vírus para outras pessoas através de suas picadas.
        </SectionDengue>
        <SectionDengue title="O vírus" path="../../assets/virus.png">
          Existem quatro sorotipos principais do vírus da Dengue: DEN-1, DEN-2, DEN-3 e DEN-4. A infecção por um sorotipo confere imunidade permanente para o mesmo e imunidade parcial e temporária contra os outros.
        </SectionDengue>

        <View className="w-[350px] mx-auto mt-[50px]">
            <View className="mb-6 flex flex-row gap-3">
                <Text className="text-blue font-semibold text-[26px]">Prevenção</Text>
            </View>
            <View>
                <Text className="text-[16px]">
                  A prevenção inclui medidas para evitar a proliferação do mosquito transmissor, como eliminar água parada, usar repelente e instalar telas em janelas e portas.
                </Text>
            </View>
            <View className="mt-[15px] flex items-center">
                <Image source={require('../../assets/prevencao.png')} className="w-[350px] h-[150px] rounded-lg"/>
            </View>
        </View>
    </ScrollView>
  );
}