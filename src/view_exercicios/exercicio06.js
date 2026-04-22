import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ExercicioView06() {
  return (
    <View style={styles.container}>
<View style={styles.blueBox}>
        <Text style={styles.textStyle}>Azul</Text>
      </View>

      <View style={styles.grayBox}>
        <Text style={styles.textStyle}>gray</Text>
      </View>


      <View style={styles.greenBox}>
        <Text style={styles.textStyle}>Verde</Text>
      </View>

      
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  greenBox: {
    width: 2000,
    height: 70,

    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },

  blueBox: {
    width: 2000,
    height: 70,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },

    grayBox:{
        flex: 1,
    width: 2000,
    height: 70,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    }
});
