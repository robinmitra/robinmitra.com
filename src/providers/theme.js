import React from "react";

import { useTheme } from "../hooks/theme";
import { light } from "../config/themes";

// Default context value in case a provider does not set one (which is not actually going to happen
// as it does set it below).
const defaultValue = {
  theme: undefined, // "undefined" to avoid flicker between sun and moon in the theme toggle upon initial load.
  toggleTheme: () => {
  },
};

export const ThemeContext = React.createContext(defaultValue);

ThemeContext.displayName = "Theme";

const Provider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Provider;