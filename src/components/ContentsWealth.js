import { Text, View, Pressable, Linking, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../colors";

export default function ContentsWealth({ IconGroup, icon, title, text, link }) {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => Linking.openURL(link)}>
      <View style={styles.textContent}>
        <Text style={{ fontweight: 600, fontSize: 14, color: Colors.BLUE }}>
          {title}
        </Text>
        <Text>{text}</Text>
        <Text
          style={{ fontweight: 600, fontSize: 12, color: Colors.ALMOST_BLUE }}
        >
          Ver mais &gt;
        </Text>
      </View>
      <View style={styles.icon}>
        <IconGroup name={icon} size={40} color="#0C73D3" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
    marginBottom: 0,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.ALMOST_BLACK,
  },
  textContent: {
    width: 195,
    height: 90,
    gap: 5,
  },
  icon: {
    backgroundColor: Colors.ALMOST_BLACK,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.BLUE,
  },
});
