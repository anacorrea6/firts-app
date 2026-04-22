import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ExercicioView05() {
  return (
    <View style={styles.container}>
    <View style={styles.blueBox}>
            <Text style={styles.textStyle}>Azul</Text>
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
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%'

  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },


  blueBox: {
    width: 200,
    height: 1000,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },

  greenBox: {
    width: 200,
    height: 1000,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});