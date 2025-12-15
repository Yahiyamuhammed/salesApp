import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function AddSaleScreen() {
  const [shopName, setShopName] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [returnProduct, setReturnProduct] = useState("");
  const [returnQuantity, setReturnQuantity] = useState("");
  const [returnWeight, setReturnWeight] = useState("");

  const handleSave = () => {
    // For now, just log data
    console.log({
      shopName,
      productName,
      quantity,
      weight,
      returnProduct,
      returnQuantity,
      returnWeight,
    });
    alert("Sale saved (dummy)");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Sale</Text>

      {/* Shop Name */}
      <Text style={styles.label}>Shop Name</Text>
      <TextInput
        placeholder="Enter or select shop"
        style={styles.input}
        value={shopName}
        onChangeText={setShopName}
      />

      {/* Product */}
      <Text style={styles.label}>Product Name</Text>
      <TextInput
        placeholder="Enter product name"
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
      />

      <Text style={styles.label}>Quantity</Text>
      <TextInput
        placeholder="Number of items"
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Text style={styles.label}>Weight (kg)</Text>
      <TextInput
        placeholder="Weight in kg"
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      {/* Returns (optional) */}
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Returns (optional)</Text>

      <Text style={styles.label}>Product Name</Text>
      <TextInput
        placeholder="Returned product name"
        style={styles.input}
        value={returnProduct}
        onChangeText={setReturnProduct}
      />

      <Text style={styles.label}>Quantity</Text>
      <TextInput
        placeholder="Number of items"
        style={styles.input}
        keyboardType="numeric"
        value={returnQuantity}
        onChangeText={setReturnQuantity}
      />

      <Text style={styles.label}>Weight (kg)</Text>
      <TextInput
        placeholder="Weight in kg"
        style={styles.input}
        keyboardType="numeric"
        value={returnWeight}
        onChangeText={setReturnWeight}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Sale</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  label: {
    color: "#aaaaaa",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
