import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { initDB } from "@/src/db/database";

export default function RootLayout() {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "#2B3A51" }}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </>
  );
}
