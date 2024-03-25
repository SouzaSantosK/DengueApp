import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";

import InfoHeader from "../../src/components/InfoHeader";

import "../../global.css";
import SectionVacina from "../../src/components/SectionVacina";

export default function Vacinas() {
  return (
    <ScrollView className="bg-whiteBG flex-1 pb-32">
        <InfoHeader path={require('../../assets/vacinas.png')} title="Vacinas da Dengue">
          No Brasil, existem duas vacinas autorizadas pela Anvisa que oferecem proteção contra os quatro sorotipos do vírus da dengue.
        </InfoHeader>
        <SectionVacina title="QDenga (TAK-003):" path="../../assets/qdenga.png">
          Desenvolvida pelo laboratório Japonês Takeda Pharma.<br/><br/>É indicada para pessoas de 4 a 60 anos e aplicada em duas doses com intervalo de três meses. <br/><br/>Contém vírus vivos atenuados, induzindo resposta imunológica contra os quatro sorotipos do vírus.
        </SectionVacina>
        <SectionVacina title="Dengvaxia:" path="../../assets/dengvaxia.png">
          Produzida pela Sanofi Medley, é recomendada para indivíduos que já tiveram dengue, entre 6 e 45 anos de idade.<br/><br/>O esquema vacinal consiste em três doses, com intervalos de seis meses entre elas.
        </SectionVacina>
    </ScrollView>
  );
}