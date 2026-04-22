// PERFIL DO ALUNO


import { View, Text } from 'react-native';

export default function PerfilAluno({nome,turma,matricula }) {
  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Turma: {turma}</Text>
      <Text>Matricula: {matricula}</Text>
    </View>
  );
}


// app do exercicio
// export default function App() {
//   return (
//     <View>
//       <Saudacao Nome="Carlos" turma="DS-2025" matricula="00123" />
//     </View>
//   );
// }
