import { TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "../../theme/ThemeProvider";

import styles from "./index.styles";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchCityInfo } from "../../redux/citySlice";

const SearchInput: React.FC = (): JSX.Element => {
  const theme = useTheme();
  const [cityName, setCityName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const cityInfo = useSelector((state: RootState) => state.city.cityInfo);

  const lock = cityName.length < 3;
  const handleSearch = () => {
    dispatch(fetchCityInfo(cityName));
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
      <TouchableOpacity onPress={handleSearch} disabled={lock}>
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
