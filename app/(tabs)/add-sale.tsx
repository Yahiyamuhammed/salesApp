import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddSaleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Sale</Text>

      <TextInput
        placeholder="Shop Name"
        style={styles.input}
      />

      <TextInput
        placeholder="Product Name"
        style={styles.input}
      />

      <TextInput
        placeholder="Quantity"
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Save Sale" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
});
