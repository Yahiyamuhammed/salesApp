import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { createSale } from "../../../controllers/salesController";
import styles from "./addSaleModalStyles";

export default function AddSaleModal({ visible, onClose }) {
  const [shopName, setShopName] = useState("");
  const [products, setProducts] = useState([
    { name: "", quantity: "", unit: "kg", price: "" },
  ]);

  const addProductRow = () => {
    setProducts([
      ...products,
      { name: "", quantity: "", unit: "kg", price: "" },
    ]);
  };

  const updateProduct = (index, key, value) => {
    const updated = [...products];
    updated[index][key] = value;
    setProducts(updated);
  };

  const handleSubmit = async () => {
    const formattedProducts = products.map((p) => ({
      name: p.name,
      quantity: Number(p.quantity),
      unit: p.unit,
      price: Number(p.price),
    }));

    await createSale({
      shop: {
        name: shopName,
        latitude: 0,
        longitude: 0,
        accuracy: 0,
        commission: 5,
      },
      products: formattedProducts,
    });

    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      {/* SafeAreaView handles top/bottom notches */}
      <SafeAreaProvider>
        <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Add Sale</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Shop Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter shop name"
              value={shopName}
              onChangeText={setShopName}
            />

            <Text style={styles.sectionTitle}>Products</Text>

            {products.map((item, index) => (
              <View key={index} style={styles.productCard}>
                <TextInput
                  style={styles.input}
                  placeholder="Product name"
                  value={item.name}
                  onChangeText={(text) => updateProduct(index, "name", text)}
                />

                <View style={styles.row}>
                  <TextInput
                    style={[styles.input, styles.smallInput]}
                    placeholder="Qty"
                    keyboardType="numeric"
                    value={item.quantity}
                    onChangeText={(text) =>
                      updateProduct(index, "quantity", text)
                    }
                  />
                  <TextInput
                    style={[styles.input, styles.smallInput]}
                    placeholder="Unit (kg/g)"
                    value={item.unit}
                    onChangeText={(text) => updateProduct(index, "unit", text)}
                  />
                </View>

                <TextInput
                  style={styles.input}
                  placeholder="Price"
                  keyboardType="numeric"
                  value={item.price}
                  onChangeText={(text) => updateProduct(index, "price", text)}
                />
              </View>
            ))}

            <TouchableOpacity style={styles.addMoreBtn} onPress={addProductRow}>
              <Text style={styles.addMoreText}>+ Add another product</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
              <Text style={styles.saveText}>Save Sale</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
}
