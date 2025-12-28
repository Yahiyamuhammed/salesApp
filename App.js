import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./src/navigation/BottomTabs";
import { initDB } from "./src/database/db";

export default function App() {
  useEffect(() => {
    initDB().catch(err => console.log(err));
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
