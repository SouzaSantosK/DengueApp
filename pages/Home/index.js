import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ActionsButtons from "../../src/components/ActionsButtons";
import ContentsWealth from "../../src/components/ContentsWealth";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h1}>
        Olá, <span style={{ fontWeight: "700" }}>Visitante</span>
      </Text>
      <Image
        source={require("../../assets/governo.png")}
        style={styles.banner}
      />
      <Text style={styles.h2}>Ações</Text>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <ActionsButtons
          icon="syringe"
          text="Vacinas da Dengue"
          redirect="Vacinas"
        />
        <ActionsButtons
          icon="mosquito"
          text="Sobre a Dengue"
          redirect="Dengue"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.h2}>Conteúdos</Text>
        <View style={styles.contentWrap}>
          <ContentsWealth
            IconGroup={FontAwesome}
            icon="heartbeat"
            text="Guia de Vigilância em Saúde - 6º edição"
            title="Vigilância em Saúde"
            link="https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-3-6a-edicao/view"
          />
          <ContentsWealth
            IconGroup={MaterialCommunityIcons}
            icon="baby-face-outline"
            text="Saúde da Criança"
            title="Saúde da família"
            link="https://www.gov.br/saude/pt-br/composicao/saps/estrategia-saude-da-familia"
          />
          <ContentsWealth
            IconGroup={MaterialCommunityIcons}
            icon="hospital-box"
            text="Plano Nacional de Saúde 2016-2019"
            title="Plano de Saúde"
            link="https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/proadi-sus/sobre-o-programa/arquivos/plano-nacional-saude-2016-2019.pdf/view"
          />
          <ContentsWealth
            IconGroup={FontAwesome6}
            icon="hospital"
            text="Financiamento da Saúde - CONASEMS"
            title="Financiamento da saúde"
            link="https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/articulacao-interfederativa/cit/pautas-de-reunioes-e-resumos/2016/abril/2-d-mauro_conasems_cti.pdf/view"
          />
        </View>
      </View>
    </ScrollView>
  );
}
