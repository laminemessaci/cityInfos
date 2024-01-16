
import { TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from "../../theme/ThemeProvider";

import styles from "./index.styles";



const SearchInput: React.FC = (): JSX.Element => {
  const theme = useTheme();
  const [cityName, setCityName] = useState<string>('')
  const handleSearch = () => {
    console.log("searching for", cityName);
  };

  return (
    <View style={styles.container(theme)}>
      <TextInput
        style={styles.input(theme)}
        placeholder="Enter city name"
        value={cityName || ""}
        onChangeText={(text) => setCityName(text)}
        placeholderTextColor={theme.colors.primary}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Icon
          name="search"
          size={25}
          color={theme.colors.primary}
          style={styles.searchIcon(theme)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
