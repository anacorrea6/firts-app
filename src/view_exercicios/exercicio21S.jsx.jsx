
import { View, StyleSheet } from 'react-native';

export default function Exercicio21S() {
return (
<View style={styles.container}>
<View style={styles.header} />
  <View style={styles.corpo}>
    <View style={styles.sidebar} />
    <View style={styles.areaPrincipal}>

      <View style={styles.secaoSuperior}>
        <View style={[styles.card, { backgroundColor: 'green' }]} />
        <View style={[styles.card, { backgroundColor: 'blue' }]} />
      </View>

      <View style={styles.divisor} />

      <View style={styles.secaoInferior}>
        <View style={[styles.card, { flex: 1, backgroundColor: 'red' }]} />
        <View style={[styles.card, { flex: 2, backgroundColor: 'orange' }]} />
        <View style={[styles.card, { flex: 1, backgroundColor: 'purple' }]} />
      </View>

    </View>
  </View>


  <View style={styles.footer} />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 8,
gap: 8,
backgroundColor: '#fff',
},
header: {
height: 60,
backgroundColor: '#2c3e50',
borderRadius: 8,
},
corpo: {
flex: 1,
flexDirection: 'row',
gap: 8,
},
sidebar: {
width: 80,
backgroundColor: 'gray',
borderRadius: 8,
},
areaPrincipal: {
flex: 1,
flexDirection: 'column',
gap: 8,
},
secaoSuperior: {
flex: 1,
flexDirection: 'row',
gap: 8,
},
divisor: {
height: 8,
backgroundColor: 'lightgray', // Cor clara
borderRadius: 8,
},
secaoInferior: {
flex: 1,
flexDirection: 'row',
gap: 8,
},
card: {
flex: 1,
borderRadius: 8,
},
footer: {
height: 50,
backgroundColor: '#2c3e50',
borderRadius: 8,
},
});


  

