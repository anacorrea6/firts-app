import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./src/navigation/stackNavigation";

export default function app() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
