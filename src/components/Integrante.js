import { Text, View, Image, Pressable, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../colors";

export default function Integrante({ user, name, img, link }) {
  const navigation = useNavigation();
  return (
    <View style={{ position: "relative", width: 350, height: 180 }}>
      <Image source={`${img}`} style={{ width: 350, height: 180 }} />
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: Colors.ALMOST_BLUE,
          borderRadius: 10,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: Colors.WHITE, fontSize: 24, fontWeight: 600 }}>
          {user}
        </Text>
        <Text style={{ color: Colors.WHITE, fontSize: 24, fontWeight: "bold" }}>
          {name}
        </Text>
        <Pressable
          style={{
            backgroundColor: Colors.BLUE,
            borderRadius: 5,
            width: 100,
            marginTop: 20,
          }}
          onPress={() => Linking.openURL(link)}
        >
          <Text
            style={{
              paddingVertical: 5,
              color: Colors.WHITE,
              fontWeight: 200,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Github
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
