import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lista02 from './src/jsx_examples/lista02_jsx';
import Lista01 from './src/jsx_examples/lista01_jsx';
import Lista03 from './src/jsx_examples/lista03_jsx';





export default function App() {
  return (
    <View style={styles.container}>
      < Lista03 />
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
