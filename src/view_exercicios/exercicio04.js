import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ExercicioView04() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <Text style={styles.textStyle}>Vermelho</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  redBox: {
    width: 120,
    height: 120,

    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

});
