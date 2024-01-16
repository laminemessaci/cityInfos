import React from "react";
import { View, Image } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";

import styles from "./index.styles";

interface Props {}

/**
 * Renders the header component.
 *
 * @returns {React.ReactElement} The rendered header component.
 */
const Header: React.FC<Props> = (props): React.ReactElement => {
  const theme = useTheme();

  return (
    <View style={styles.container(theme)}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image(theme)}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;
