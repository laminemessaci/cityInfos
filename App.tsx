import "react-native-gesture-handler";
import Header from "./src/components/Header";
import HomeScreen from "./src/screens/HomeScreen";
import { useTheme } from "./src/theme/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  const theme = useTheme();

  return (
    <Provider store={store}>
      <Header />
      <HomeScreen />
    </Provider>
  );
}
