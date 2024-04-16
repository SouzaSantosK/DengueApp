import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Colors from "../colors";

export default function SectionVacina({ path, title, children }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        border: "2px solid",
        borderColor: "rgba(12,115,211,0.2)",
        width: 330,
        height: "auto",
        marginHorizontal: "auto",
        borderRadius: 20,
        marginTop: 50,
        padding: 20,
        alignItems: "center",
      }}
    >
      <View style={{ marginBottom: 24, flexDirection: "row", gap: 12 }}>
        <FontAwesome6 name="syringe" size={35} color="#0C73D3" />
        <Text style={{ color: Colors.BLUE, fontWeight: 600, fontSize: 26 }}>
          {title}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 16 }}>{children}</Text>
      </View>
      <View style={{ paddingTop: 20, paddingHorizontal: 12 }}>
        <Image
          source={`${path}`}
          style={{
            width: 290,
            height: 140,
            border: "3px solid",
            borderColor: Colors.BLUE,
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
}
