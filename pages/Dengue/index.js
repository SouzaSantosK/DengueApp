import { Image, ScrollView, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InfoHeader from "../../src/components/InfoHeader";
import SectionDengue from "../../src/components/SectionDengue";
import styles from "./style";
import Colors from "../../src/colors";

export default function Dengue() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <InfoHeader
        path={require("../../assets/dengue.png")}
        title="Sobre a dengue"
      >
        A Dengue é uma doença febril aguda causada por um vírus, que pode
        provocar sintomas como febre alta, dor de cabeça, manchas vermelhas na
        pele e, em casos graves, hemorragias.
      </InfoHeader>
      <SectionDengue title="Transmissão" path="../../assets/aedes.png">
        O principal transmissor da Dengue é o mosquito Aedes aegypti, que se
        infecta ao picar uma pessoa contaminada e pode transmitir o vírus para
        outras pessoas através de suas picadas.
      </SectionDengue>
      <SectionDengue title="O vírus" path="../../assets/virus.png">
        Existem quatro sorotipos principais do vírus da Dengue: DEN-1, DEN-2,
        DEN-3 e DEN-4. A infecção por um sorotipo confere imunidade permanente
        para o mesmo e imunidade parcial e temporária contra os outros.
      </SectionDengue>

      <View style={styles.section}>
        <Text style={styles.h2}>Prevenção</Text>
        <View>
          <Text style={{ fontSize: 16 }}>
            A prevenção inclui medidas para evitar a proliferação do mosquito
            transmissor, como eliminar água parada, usar repelente e instalar
            telas em janelas e portas.
          </Text>
        </View>
        <View style={{ marginTop: 15, display: "flex", alignItems: "center" }}>
          <Image
            source={require("../../assets/prevencao.png")}
            style={{ width: 350, height: 150, borderRadius: 20 }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.h2}>Saiba mais</Text>
        <View>
          <Text style={{ fontSize: 16 }}>
            Além disso, outra forma de se prevenir é através da vacinação.
            Clique no botão abaixo e conheça sobre as vacinas disponíveis no
            combate à Dengue:
          </Text>
        </View>
        <Pressable
          title="Vacinas"
          onPress={() => navigation.navigate("Vacinas")}
          style={styles.linkButton}
        >
          <Text style={{ color: Colors.WHITE }}>Vacinas</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
