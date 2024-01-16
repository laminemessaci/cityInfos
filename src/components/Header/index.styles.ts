import { ViewStyle, TextStyle, ImageStyle } from "react-native";

import { isIOS, SCREEN_WIDTH } from "../../constants/index";
import { ITheme } from "../../theme/types";

interface IStyles {
  container: (arg0: ITheme) => ViewStyle;
  image: (arg0: ITheme) => ImageStyle;
  title: (arg0: ITheme) => TextStyle;
}

const styles: IStyles = {
  container: (theme: ITheme) => ({
    padding: isIOS? 20: 8,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    width: SCREEN_WIDTH,
    borderColor: theme.colors.secondaryDark,
    backgroundColor: theme.colors.secondary,
  }),
  image: (theme) => ({
    top:isIOS ? 32: 8,
    width: 50,
    margin: 12,
    height: 50,
    resizeMode: "contain",
    backgroundColor: theme.colors.lightGrey,
    borderRadius: 10,
  }),
  title: (theme) => ({
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: "bold",
  }),
};

export default styles;
