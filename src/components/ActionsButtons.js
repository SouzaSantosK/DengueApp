import { Text, View, StyleSheet, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import Colors from "../colors";

export default function ActionsButtons({ icon, text, redirect }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(redirect)}>
      <View style={styles.image}>
        <FontAwesome6 name={icon} size={70} color="#0C73D3" />
      </View>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: Colors.LIGHT_BLUE,
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontFamily: "Figtree_500medium",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
});
