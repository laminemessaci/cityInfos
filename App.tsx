import "react-native-gesture-handler";
import Header from "./src/components/Header";
import HomeScreen from "./src/screens/HomeScreen";
import { useTheme } from "./src/theme/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const theme = useTheme();

  return (
    <Provider store={store}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
