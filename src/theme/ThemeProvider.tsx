import React, { createContext, ReactNode, useContext } from "react";
import type { ITheme } from "./types";
import { coffeeTheme, newTheme } from "./themes";

/* Get Theme depending on target */
export const getTheme = (): ITheme => {
  return coffeeTheme;
};

const ThemeContext = createContext<ITheme>(getTheme());

interface IProps {
  children: ReactNode;
}

/**
 * Renders the ThemeProvider component.
 *
 * @param {IProps} children - The child components to be rendered within the ThemeProvider.
 * @return {JSX.Element} The rendered ThemeProvider component.
 */
const ThemeProvider = ({ children }: IProps) => (
  <ThemeContext.Provider value={getTheme()}>{children}</ThemeContext.Provider>
);

/**
 * Generates a higher-order component that wraps the provided Component with a ThemeContext Consumer.
 *
 * @param {React.ComponentType<any>} Component - The component to be wrapped.
 * @returns {React.ComponentType<any>} A wrapper component that receives props and provides the themeDataContext from the ThemeContext.
 */
export const withTheme = (Component: React.ComponentType<any>): React.ComponentType<any> =>
  function wrapperComponent(props: any): JSX.Element {
    const themeDataContext = useContext(ThemeContext);

    return (
      <ThemeContext.Consumer>
        {() => <Component {...props} theme={themeDataContext} />}
      </ThemeContext.Consumer>
    );
  };

export const useTheme = () => useContext(ThemeContext);

export const theme = () => getTheme();

export default ThemeProvider;
