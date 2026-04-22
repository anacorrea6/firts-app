
import { View, Text } from 'react-native';

export default function CardProduto({ produto, preco }) {
  return (
    <View>
      <Text>Produto: {produto}</Text>
      <Text>Preço: R$ {preco}</Text>
    </View>
  );
}


//app dele
// export default function App() {
//   return (
//     <View>
//       <CardProduto produto="Notebook" preco={3500} />
//       <CardProduto produto="Celular" preco={2000} />
//     </View>
//   );
// }
