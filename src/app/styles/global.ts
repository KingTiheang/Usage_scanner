import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#111827",
  },

  text: {
    marginBottom: 14,
    fontSize: 22,
    fontWeight: "bold",
    color: "#F9FAFB",
  },

  titleTxt: {
    fontSize: 12,
    color: "#F9FAFB",
    textAlign: "left",
  },

  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#2563EB",
    borderRadius: 999,
    overflow: "hidden",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  link: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#2563EB",
    borderRadius: 999,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    overflow: "hidden",
    textAlign: "center",
  },

  btn1: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#F9FAFB",
  },
});
