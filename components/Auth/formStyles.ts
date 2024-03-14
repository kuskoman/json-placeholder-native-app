import { StyleSheet } from "react-native";

export const baseFormStyles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
    minWidth: 150,
  },
  input: {
    backgroundColor: "#ddd",
    borderColor: "#ccc",
    color: "#000",
    padding: 10,
    margin: 10,
    width: "100%",
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 5,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 14,
    color: "red",
    marginBottom: 5,
  },
});
