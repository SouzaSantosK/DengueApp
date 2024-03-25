import { ScrollView, Text, View } from "react-native";

import "../../global.css";
import Integrante from "../../src/components/Integrante";

export default function Devs() {
  return (
    <ScrollView className="bg-whiteBG flex-1 pb-32 px-10 pt-[80px]">
      <View className="flex gap-5">
        <Text className="text-xl font-bold text-[30px]">
          Desenvolvido por...
        </Text>
        <Integrante user="TheBrunno" name="Bruno Oliveira" img={'../../assets/cabras/bruno.png'} link="https://github.com/TheBrunno" />
        <Integrante user="Westwitt" name="Eduardo Li" img={'../../assets/cabras/eduardo.png'} link="https://github.com/Westwitt" />
        <Integrante user="SouzaSantosK" name="Kauã de Souza" img={'../../assets/cabras/kaua.png'} link="https://github.com/SouzaSantosK" />
        <Integrante user="VictorVolpi" name="Victor Volpi" img={'../../assets/cabras/volpi.png'} link="https://github.com/VictorVolpi" />
      </View>
    </ScrollView>
  );
}