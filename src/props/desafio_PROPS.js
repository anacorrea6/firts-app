// Desafio - Componente de Botão

import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Botao({ titulo }) {
  return (
    <View>
       <TouchableOpacity>
      <Text >{titulo}</Text>
    </TouchableOpacity>
    </View>
 
  );
};
   