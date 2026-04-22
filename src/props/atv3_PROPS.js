import { View, Text } from 'react-native';
//Criação de Componente
export default  function Saudacao({mensagem }) {
  return (
    <View>
        <Text>{mensagem}</Text>
    </View>
  );
}

// app do exercicio
// export default function App() {
//   return (
//     <View>
//       <Saudacao mensagem = "Olá, Ana! Bem-vindo(a)" />
//       <Saudacao mensagem = "Olá, Brenda! Bem-vindo(a)" />
//       <Saudacao mensagem = "Olá, Miguel! Bem-vindo(a)" />
//     </View>
//   );
// }
