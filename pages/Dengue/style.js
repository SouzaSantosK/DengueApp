import { StyleSheet } from "react-native";
import Colors from "../../src/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_BACKGROUND,
    paddingBottom: 100,
    flex: 1,
  },
  section: {
    width: 350,
    marginHorizontal: "auto",
    marginTop: 50,
  },
  h2: {
    color: Colors.BLUE,
    fontWeight: "600",
    fontSize: 26,
    marginBottom: 20,
  },
  linkButton: {
    width: 100,
    height: 30,
    backgroundColor: Colors.BLUE,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
