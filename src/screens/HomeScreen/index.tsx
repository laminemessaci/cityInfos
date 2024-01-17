import { View, Text, Image, ActivityIndicator, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "../../theme/ThemeProvider";

import SearchInput from "../../components/SearchInput";

import styles from "./index.styles";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchCityInfo } from "../../redux/citySlice";

const HomeScreen: React.FC = (): JSX.Element => {
  const theme = useTheme();

  const dispatch = useDispatch<AppDispatch>();
  const cityInfo = useSelector((state: RootState) => state.city?.cityInfo);
  const error = useSelector((state: RootState) => state.city.error);

  if (useSelector((state: RootState) => state.city.status) === "loading") {
    return (
      <ActivityIndicator
        style={styles.centred()}
        animating
        color={theme.colors.primary}
      />
    );
  }
  
  return (
    <View style={styles.container(theme)}>
      <SearchInput />
      {cityInfo != undefined ? (
        <View style={styles.container(theme)}>
          <Text style={styles.title(theme)}>{cityInfo[0]?.name.common}</Text>
          <Text style={styles.info(theme)}>
            Capital: {cityInfo[0]?.capital}
          </Text>
          <Text style={styles.info(theme)}>Region: {cityInfo[0]?.region}</Text>
          <Text style={styles.info(theme)}>
            Subregion: {cityInfo[0]?.subregion}
          </Text>
          <Text style={styles.info(theme)}>
            Population: {cityInfo[0]?.population}
          </Text>
          <Text style={styles.info(theme)}>
            Flag: {cityInfo[0]?.flags?.svg}
          </Text>
          <Text style={styles.info(theme)}>
            Language: {Object.keys(cityInfo[0]?.languages)[0]}
          </Text>
          <Text style={styles.info(theme)}>
            Currency: {Object.keys(cityInfo[0]?.currencies)[0]}
          </Text>
          <Text style={styles.info(theme)}>
            Top-Level Domain: {cityInfo[0]?.tld[0]}
          </Text>
          <Image
            style={styles.flag(theme)}
            source={{ uri: cityInfo[0]?.flags?.png }}
          />
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => dispatch(fetchCityInfo("france"))}
          />
        </View>
      ) : null}
    </View>
  );
};

export default HomeScreen;
