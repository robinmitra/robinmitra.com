import { useEffect, useState } from "react";

import { light, dark } from "../config/themes";

export const useTheme = () => {
  const [theme, setTheme] = useState(undefined);

  const toggleTheme = () => {
    const root = window.document.documentElement;

    const newTheme = theme === light ? dark : light;

    window.localStorage.setItem("theme", newTheme.label);
    setTheme(newTheme);
    Object.entries(newTheme).forEach(([name, value]) => {
      const cssVarName = `--${name}`;
      root.style.setProperty(cssVarName, `${value}`);
    });
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialThemeName = root.style.getPropertyValue("--initial-theme");
    const initialTheme = initialThemeName === "light" ? light : dark;
    setTheme(initialTheme);
  }, []);

  return [theme, toggleTheme];
};
