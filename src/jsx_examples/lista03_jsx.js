import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista03() {

  const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

  const produtos = [
    { id: 1, nome: "Camiseta", preco: 49.90 },
    { id: 2, nome: "Calça", preco: 89.90 },
    { id: 3, nome: "Tênis", preco: 199.90 },
  ];

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 03 - Ana Júlia Corrêa Ferraz</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 1 - Lista de Frutas</Text>
        {frutas.map((fruta, indice) => (
          <Text key={indice}>{indice + 1} - {fruta}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - Lista de Produtos</Text>
        {produtos.map((produto) => (
          <Text key={produto.id}>
            Nome: {produto.nome}, Preço: R$ {produto.preco.toFixed(2)}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 3 - Números Pares</Text>
        {numeros
          .filter((n) => n % 2 === 0)
          .map((numero) => (
            <Text key={numero}>{numero}</Text>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});