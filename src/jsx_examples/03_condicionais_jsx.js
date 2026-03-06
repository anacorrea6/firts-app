
import { View, Text, StyleSheet } from "react-native";

export default function Exemplo03() {
    const logado = true;
    const temNotificacoes = false;
  return (
    <View style={styles.container}>
      <View style={styles.exemplo}>
      <Text style={styles.titulo}>Exemplo 3 - Condicionais</Text>
      <Text style={styles.subtitulo}>Ternario</Text>
      <Text>Status:{logado ? "Logado": "Deslogado"}</Text>
      </View>
      
      {/* VAMOS CONSTRUIR AQUI E USAR styles.exemplo */}
    <View styles={styles.exemplo}>
    <Text style={styles.subtitulo}>Operador &&</Text>
    <Text>Notificacoes:</Text>
    {temNotificacoes && <Text>Você tem novas temNotificacoes</Text>}
    {!temNotificacoes && <Text>Nenhuma notificacao</Text>}
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});

