import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import { useTheme } from "./src/theme/ThemeProvider";

export default function App() {
  const theme = useTheme();
  
  return (
    <>
      <Header />
    </>
  );
}



