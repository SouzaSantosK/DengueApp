import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../colors";

export default function SectionDengue({ path, title, children }) {
  const navigation = useNavigation();

  return (
    <View style={{ width: 350, marginHorizontal: "auto", marginTop: 50 }}>
      <View style={{ marginBottom: 24, flexDirection: "row", gap: 12 }}>
        <Text style={{ color: Colors.BLUE, fontWeight: 600, fontSize: 26 }}>
          {title}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 16 }}>{children}</Text>
      </View>
      <View style={{ marginTop: 15, alignItems: "center" }}>
        <Image
          source={`${path}`}
          style={{ width: 350, height: 150, borderRadius: 10 }}
        />
      </View>
    </View>
  );
}
