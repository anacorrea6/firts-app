import { Text, View, StyleSheet } from "react-native";

//desestrututuração
export default function CartaoPerfil({nome, idade}) {
  // conseguimos passar dentro de nome duas chaves (props) para enviar caracteristica
  return (
    <View style = {styles.card}>
      <Text>
        <Text style = {styles.nome}>Nome: {nome}</Text>
        <Text style = {styles.idade}>Idade: {idade}</Text>
      </Text>
    </View>
  );
}

// para passar o recebimento da props temos que passar as propriedades para app.js
//TIPO DE DADO: String sempre entre as aspas e flowt entre chaves



const styles =  StyleSheet.create({
card:{
    backgroundColor: '#fff',
    borderRadius: 12,
    padding:16,
    borderWidth: 1, //linha
    borderColor: '#e5e7eb'
},


nome: {
    fontSize:18,
    fontWeight: "bold",
    marginBottom: 4,
},

info:{
    fontSize:14,
    color: "#6b7280"
},

})