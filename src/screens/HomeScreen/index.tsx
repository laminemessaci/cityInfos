import { View} from "react-native";

import { useTheme } from "../../theme/ThemeProvider";

import SearchInput from "../../components/SearchInput";

import styles from './index.styles'


const HomeScreen : React.FC = (): JSX.Element=> {
  const theme = useTheme();

  return (
    <View style={styles.container(theme)}>
      <SearchInput />
    </View>
  );
};

export default HomeScreen;
