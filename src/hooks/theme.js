import { useEffect, useState } from "react";

import { light, dark } from "../config/themes";

const getPreferredTheme = () => {
  const preferredTheme = window.localStorage.getItem("theme");
  if (preferredTheme) return preferredTheme === "light" ? light : dark;
  return light;
};

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
    setTheme(getPreferredTheme());
  }, []);

  return [theme, toggleTheme];
};