import { ViewStyle, TextStyle, ImageStyle } from "react-native";

import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../constants";
import { ITheme } from "../../theme/types";

interface IStyles {
  container: (arg0: ITheme) => ViewStyle;
  input: (arg0: ITheme) => ViewStyle;
  searchIcon: (arg0: ITheme) => ViewStyle;
}

const styles: IStyles = {
  container: (theme) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: SCREEN_WIDTH - 48,
  }),

  input: (theme) => ({
    flex: 1,
    height: 46,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    padding: 8,
    marginRight: 16,
    borderRadius: 8,
    color: theme.colors.secondary,
  }),

  searchIcon: (theme) => ({
    padding: 8,
  }),
};

export default styles;
