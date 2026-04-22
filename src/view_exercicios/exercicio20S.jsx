
import { View, StyleSheet } from 'react-native';

export default function Exercicio20S() {
return (
<View style={styles.container}>
<View style={styles.header} />
<View style={styles.rowTopo}>
<View style={[styles.box, { flex: 1, backgroundColor: 'verde-agua' }]} />
<View style={[styles.box, { flex: 1, backgroundColor: 'azul-claro' }]} />
<View style={[styles.box, { flex: 2, backgroundColor: 'laranja-escuro' }]} />
</View>


  <View style={[styles.areaCentral, {backgroundColor: 'azul' }]} />


  <View style={styles.rowFundo}>
    <View style={[styles.box, { flex: 1, backgroundColor: 'roxo' }]} />
    <View style={[styles.box, { flex: 1, backgroundColor: 'verde-agua' }]} />
    <View style={[styles.box, { flex: 1, backgroundColor: 'laranja-escuro' }]} />
  </View>
</View>

);
}

// nao consegui fazer o emulador funcionar, desculpa professor 
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 8,
gap: 8,
flexDirection: 'column',
backgroundColor: '#fff', 
},
header:{
height: 60,
backgroundColor: '#e74e3c',
borderRadius: 8,
flex:1,
},
rowTopo: {
height: 120,
flexDirection: 'row',
gap: 8,
},
areaCentral: {
flex: 1,
borderRadius: 8, 
backgroundColor: '#2c3e50'
},
rowFundo: {
height: 80,
flexDirection: 'row',
gap: 8,
flex:1,
backgroundColor:'#9b59b5',
borderBlockColor:'#1abc9c',
backgroundColor:'#e67e22'
},
box: {
borderRadius: 8, 
backgroundColor: '#2ecc71',
backgroundColor: '#3498db',
backgroundColor: '#f39c12',
},
header:{

}
});



