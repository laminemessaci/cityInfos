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

  const handleSearch = () => {
    dispatch(fetchCityInfo(cityName));
  };
  
/**
 * Checks if the search functionality is disabled.
 *
 * @return {boolean} Returns true if the search is disabled, otherwise false.
 */
  const isSearchDisabled = () => {
    if (cityName.length < 3) {
      return true;
    }
    const regex = /^[a-zA-Z\s]+$/u;
    if (!regex.test(cityName)) {
      return true;
    }
    // TO DO Verify if countries is include in external API here

    return  cityInfo.length === 0;
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
      <TouchableOpacity onPress={handleSearch} disabled={isSearchDisabled()}>
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
