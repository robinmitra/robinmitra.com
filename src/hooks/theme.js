import { useState } from "react";

import themes from "../config/themes";

export const useTheme = () => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return [theme, toggleTheme];
};