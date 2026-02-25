import { View, Text, StyleSheet } from "react-native";

export default function MapsJSX() {
  const frutas = ["Maçã", "Banana", "Manga", "Uva"]
  const alunos= [
    { id: 1, nome: "Vinícius Assunção", nota: 10}, {id: 2, nome: "Heitor Barbosa", nota: 8}, {id: 3, nome: "Lívia Hermano", nota: 10}
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Map - Exemplos</Text>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Map padrão</Text>
        {frutas.map((fruta, indice) => (
            <Text key={indice}>
                {indice + 1}- {fruta}
            </Text>
        ))}
      </View>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Map em objetos</Text>
        {alunos.map((aluno) => (
          <Text key={aluno.id}>
            {aluno.nome} - {aluno.nota}
          </Text>
        ))}
      </View>
      <View style={styles.exemplo}>
        <Text style={styles.titulo}>Exemplo 4 - Map com Filter</Text>
        <Text style={styles.subtitulo}>Map com Filter</Text>
        {alunos
            .filter((aluno) => aluno.nota > 7)
            .map((aluno) => (
                <Text key={aluno.id}>Aprovado: {aluno.nome}</Text>
           ))}
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

