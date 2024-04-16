import { Image, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../src/colors";

export default function Splash() {
  const navigation = useNavigation();

  function loading() {
    setTimeout(() => {
      navigation.navigate("Tabs");
    }, 2000);
  }
  loading();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/splash.png")}
        style={{ width: 500, height: 500 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_BACKGROUND,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
