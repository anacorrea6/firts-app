import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ExpressoesJSX } from './src/jsx_examples/02_expressoes_jsx';
import Exemplo03 from './src/jsx_examples/condicionais_jsx';
import Exemplo04 from './src/jsx_examples/04_listas_mapjsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo04 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
