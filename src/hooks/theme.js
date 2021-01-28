import { useState } from "react";

import { light, dark } from "../config/themes";

export const useTheme = () => {
  let defaultTheme = light;

  // Not using `useEffect` for retrieving this in order to avoid a flash of default theme.
  const preferredTheme = window.localStorage.getItem("theme");
  if (preferredTheme) defaultTheme = preferredTheme === "light" ? light : dark;

  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    if (theme === light) {
      window.localStorage.setItem("theme", "dark");
      setTheme(dark);
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme(light);
    }
  };

  return [theme, toggleTheme];
};