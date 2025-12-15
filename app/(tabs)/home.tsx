import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const salesData = [
  { id: "1", customer: "John", amount: "₹1,200" },
  { id: "2", customer: "Akhil", amount: "₹850" },
  { id: "3", customer: "Sara", amount: "₹2,300" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Sales Dashboard</Text>
        <Text style={styles.subtitle}>Today overview</Text>
      </View>

      {/* Summary Cards */}
      <View style={styles.cardsRow}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Today Sales</Text>
          <Text style={styles.cardValue}>₹4,350</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Orders</Text>
          <Text style={styles.cardValue}>3</Text>
        </View>
      </View>

      {/* Add Sale Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add New Sale</Text>
      </TouchableOpacity>

      {/* Recent Sales */}
      <Text style={styles.sectionTitle}>Recent Sales</Text>

      <FlatList
        data={salesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.saleItem}>
            <Text style={styles.saleCustomer}>{item.customer}</Text>
            <Text style={styles.saleAmount}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 14,
    color: "#aaaaaa",
    marginTop: 4,
  },
  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: "48%",
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 12,
  },
  cardLabel: {
    color: "#aaaaaa",
    fontSize: 14,
  },
  cardValue: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  saleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1e1e1e",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  saleCustomer: {
    color: "#ffffff",
    fontSize: 16,
  },
  saleAmount: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "600",
  },
});
