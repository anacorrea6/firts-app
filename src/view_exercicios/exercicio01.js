import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ExercicioView01() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <Text style={styles.textStyle}>Vermelho</Text>
      </View>

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
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  redBox: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  blueBox: {
    width: 80,
    height: 80,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },

  greenBox: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
