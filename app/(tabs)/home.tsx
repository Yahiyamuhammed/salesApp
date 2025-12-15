import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales App</Text>

      <Text style={styles.text}>Today’s Sales: 0</Text>
      <Text style={styles.text}>This Month Commission: 0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
