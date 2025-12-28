import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import AddSaleModal from "./components/AddSaleModal";

export default function SalesScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sales</Text>

          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={{ fontSize: 18 }}>+ Add Sale</Text>
          </TouchableOpacity>
        </View>

        <AddSaleModal visible={visible} onClose={() => setVisible(false)} />
      </View>
    </SafeAreaView>
  );
}
