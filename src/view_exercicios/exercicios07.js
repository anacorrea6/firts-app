import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ExercicioView07() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>

      <View style={styles.row}>
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },

  box: {
    flex: 1,
  },

  box1: {
    backgroundColor: 'red',
    flex: 1
  },

  box2: {
    backgroundColor: 'blue',
  },

  box3: {
    backgroundColor: 'green',
  },

  box4: {
    backgroundColor: 'purple',
  },
});


  