import { ViewStyle } from "react-native";

import { SCREEN_WIDTH } from "../../constants";
import { ITheme } from "../../theme/types";

interface IStyles {
  container: (arg0: ITheme) => ViewStyle;
}

const styles: IStyles = {
  container: (theme) => ({
    flex: 1,
    padding: 10,
    top: 48,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  }),
};

export default styles;
