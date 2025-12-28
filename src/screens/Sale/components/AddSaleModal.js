import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { createSale } from "../../../controllers/salesController";

export default function AddSaleModal({ visible, onClose }) {
  const [shopName, setShopName] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    await createSale({
      shop: {
        name: shopName,
        latitude: 0,
        longitude: 0,
        accuracy: 0,
        commission: 5,
      },
      products: [
        {
          name: productName,
          quantity: Number(quantity),
          unit,
          price: Number(price),
        },
      ],
    });

    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <Text>Add Sale</Text>

          <TextInput placeholder="Shop Name" value={shopName} onChangeText={setShopName} />
          <TextInput placeholder="Product Name" value={productName} onChangeText={setProductName} />
          <TextInput placeholder="Quantity" keyboardType="numeric" value={quantity} onChangeText={setQuantity} />
          <TextInput placeholder="Unit (kg/g)" value={unit} onChangeText={setUnit} />
          <TextInput placeholder="Price" keyboardType="numeric" value={price} onChangeText={setPrice} />

          <TouchableOpacity onPress={handleSubmit}>
            <Text>Save Sale</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
