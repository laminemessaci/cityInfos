import "react-native-gesture-handler";
import Header from "./src/components/Header";
import HomeScreen from "./src/screens/HomeScreen";
import { useTheme } from "./src/theme/ThemeProvider";

export default function App() {
  const theme = useTheme();
  
  return (
    <>
      <Header />
      <HomeScreen />
    </>
  );
}



