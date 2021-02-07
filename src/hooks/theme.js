import { useEffect, useState } from "react";

import { light, dark } from "../config/themes";

export const useTheme = () => {
  const [theme, setTheme] = useState(light);

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
    const initialTheme = root.style.getPropertyValue("--initial-theme");
    setTheme(initialTheme === "light" ? light : dark);
  }, []);

  return [theme, toggleTheme];
};