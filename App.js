import { StyleSheet, Text, View } from "react-native";
import Botao from "./src/props/desafio_PROPS";




export default function App() {
  return (
    <View>
      <Botao titulo="Entrar" />
      <Botao titulo="Sair" />
      <Botao titulo="Cadastrar" />
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
