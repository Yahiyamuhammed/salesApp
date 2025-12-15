import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

type Product = {
  name: string;
  qty: string;
  weight: string;
};

export default function AddSaleScreen() {
  const [shopName, setShopName] = useState("");

  const [soldProducts, setSoldProducts] = useState<Product[]>([
    { name: "", qty: "", weight: "" },
  ]);

  const [returnProducts, setReturnProducts] = useState<Product[]>([
    { name: "", qty: "", weight: "" },
  ]);

  const addSoldProduct = () => {
    setSoldProducts([...soldProducts, { name: "", qty: "", weight: "" }]);
  };

  const addReturnProduct = () => {
    setReturnProducts([...returnProducts, { name: "", qty: "", weight: "" }]);
  };

  const updateSoldProduct = (
    index: number,
    field: keyof Product,
    value: string
  ) => {
    const updated = [...soldProducts];
    updated[index][field] = value;
    setSoldProducts(updated);
  };

  const updateReturnProduct = (
    index: number,
    field: keyof Product,
    value: string
  ) => {
    const updated = [...returnProducts];
    updated[index][field] = value;
    setReturnProducts(updated);
  };

  const handleSave = () => {
    console.log({ shopName, soldProducts, returnProducts });
    alert("Sale saved");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Sale</Text>

      {/* Shop */}
      <Text style={styles.label}>Shop Name</Text>
      <TextInput
        placeholder="Enter shop name"
        placeholderTextColor="#999"
        style={styles.input}
        value={shopName}
        onChangeText={setShopName}
      />

      {/* Sold Products */}
      <Text style={styles.sectionTitle}>Sold Products</Text>

      {soldProducts.map((item, index) => (
        <View key={index} style={styles.card}>
          <TextInput
            placeholder="Product name"
            placeholderTextColor="#999"
            style={styles.input}
            value={item.name}
            onChangeText={(text) =>
              updateSoldProduct(index, "name", text)
            }
          />

          <TextInput
            placeholder="Quantity"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="numeric"
            value={item.qty}
            onChangeText={(text) =>
              updateSoldProduct(index, "qty", text)
            }
          />

          <TextInput
            placeholder="Weight (kg)"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="numeric"
            value={item.weight}
            onChangeText={(text) =>
              updateSoldProduct(index, "weight", text)
            }
          />
        </View>
      ))}

      <TouchableOpacity style={styles.outlineBtn} onPress={addSoldProduct}>
        <Text style={styles.outlineBtnText}>+ Add Sold Product</Text>
      </TouchableOpacity>

      {/* Returns */}
      <Text style={styles.sectionTitle}>Returned Products</Text>

      {returnProducts.map((item, index) => (
        <View key={index} style={styles.card}>
          <TextInput
            placeholder="Product name"
            placeholderTextColor="#999"
            style={styles.input}
            value={item.name}
            onChangeText={(text) =>
              updateReturnProduct(index, "name", text)
            }
          />

          <TextInput
            placeholder="Quantity"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="numeric"
            value={item.qty}
            onChangeText={(text) =>
              updateReturnProduct(index, "qty", text)
            }
          />

          <TextInput
            placeholder="Weight (kg)"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="numeric"
            value={item.weight}
            onChangeText={(text) =>
              updateReturnProduct(index, "weight", text)
            }
          />
        </View>
      ))}

      <TouchableOpacity style={styles.outlineBtn} onPress={addReturnProduct}>
        <Text style={styles.outlineBtnText}>+ Add Returned Product</Text>
      </TouchableOpacity>

      {/* Save */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Sale</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 20,
  },
  label: {
    color: "#666666",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#ffffff",
    color: "#111111",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111111",
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f7f7f7",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: "#43ca96ff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 6,
  },
  outlineBtnText: {
    color: "#43ca96ff",
    fontSize: 16,
    fontWeight: "600",
  },
  saveButton: {
    backgroundColor: "#43ca96ff",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
