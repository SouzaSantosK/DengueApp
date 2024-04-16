import { ScrollView, Text, View } from "react-native";

import Integrante from "../../src/components/Integrante";
import Colors from "../../src/colors";

export default function Devs() {
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.WHITE,
        flex: 1,
        paddingBottom: 100,
        paddingHorizontal: 40,
        paddingTop: 80,
      }}
    >
      <View style={{ display: "flex", gap: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Desenvolvido por...
        </Text>
        <Integrante
          user="TheBrunno"
          name="Bruno Oliveira"
          img={"../../assets/cabras/bruno.png"}
          link="https://github.com/TheBrunno"
        />
        <Integrante
          user="Westwitt"
          name="Eduardo Li"
          img={"../../assets/cabras/eduardo.png"}
          link="https://github.com/Westwitt"
        />
        <Integrante
          user="SouzaSantosK"
          name="Kauã de Souza"
          img={"../../assets/cabras/kaua.png"}
          link="https://github.com/SouzaSantosK"
        />
        <Integrante
          user="VictorVolpi"
          name="Victor Volpi"
          img={"../../assets/cabras/volpi.png"}
          link="https://github.com/VictorVolpi"
        />
      </View>
    </ScrollView>
  );
}
