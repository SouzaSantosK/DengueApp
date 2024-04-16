import { StyleSheet } from "react-native";
import Colors from "../../src/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_BACKGROUND,
    padding: 40,
    paddingBottom: 100,
    flex: 1,
  },
  banner: {
    height: 200,
    marginTop: 20,
    borderRadius: 20,
  },
  h1: {
    fontSize: 30,
    fontFamily: "Figtree_400Regular",
  },

  h2: {
    fontSize: 26,
    marginVertical: 20,
    fontFamily: "Figtree_600Semibold",
  },
  contentWrap: {
    backgroundColor: Colors.LIGHT_BLUE,
    width: "100%",
    height: "auto",
    borderRadius: 10,
  },
});
