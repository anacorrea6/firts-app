//DESESTRUTURAÇÃO

import { View, Text } from 'react-native';

export default function CartaoUsuario({ nome, email }) {
    return (
        <View>
            <Text>{nome}</Text>
            <Text>{email}</Text>
        </View>
    );
}

// app dele 
//export default function App() {
//  return (
//   <View>
//     <CartaoUsuario nome="ANA" />
//     <CartaoUsuario email="anajulia@email.com" />
//   </View>
// );
//}