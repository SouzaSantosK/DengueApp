import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../colors";

export default function InfoHeader({ path, title, children }) {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={path} />
      <View style={{ width: 350, marginHorizontal: "auto" }}>
        <Text
          style={{
            color: Colors.BLUE,
            fontWeight: "bold",
            fontSize: 45,
            width: 240,
            position: "absolute",
            top: -125,
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 16, marginTop: 5 }}>{children}</Text>
      </View>
    </View>
  );
}
