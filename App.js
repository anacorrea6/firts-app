import { StyleSheet, Text, View } from "react-native";
import Recados from "./src/hooks/exercicio_aula5/exer5";






export default function app() {
  return (
    <View style = {styles.container}>
     <Recados/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
