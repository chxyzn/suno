import { Link, Redirect } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return <Redirect href={"home"} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
