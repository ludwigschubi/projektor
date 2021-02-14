import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const ButtonStyleSheet = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    display: "flex",
    backgroundColor: colors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  text: {
    color: colors.white,
  },
  logo: {
    width: 24,
    height: 24,
  },
});
