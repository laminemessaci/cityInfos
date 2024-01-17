import { ViewStyle, TextStyle, ImageStyle } from "react-native";

import { SCREEN_WIDTH } from "../../constants";
import { ITheme } from "../../theme/types";

interface IStyles {
  header: (org0: ITheme) => TextStyle;
  flag: (arg0: ITheme) => ImageStyle;
  container: (arg0: ITheme) => ViewStyle;
  title: (arg0: ITheme) => TextStyle;
  info: (arg0: ITheme) => TextStyle;
  centred:() =>ViewStyle;
}

const styles: IStyles = {
  container: (theme) => ({
    flex: 1,
    padding: 10,
    top: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  }),
  header: (theme) => ({
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  }),
  flag: (theme) => ({
    width: 200,
    height: 120,
    marginVertical: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.darkGrey,
  }),
  title: (theme) => ({
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  }),
  info: (theme) => ({
    fontSize: 16,

    marginBottom: 5,
  }),
  centred: () => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }),
};

export default styles;
