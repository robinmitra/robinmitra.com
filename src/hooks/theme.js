import { useEffect, useState } from "react";

import { light, dark } from "../config/themes";
import logger from "../utils/logger";

const getThemePreference = () => window.localStorage.getItem("theme");

const saveThemePreference = theme => window.localStorage.setItem("theme", theme.label);

const initThemeVars = theme => {
  logger.debug("Initialising theme CSS variables")
  const root = document.documentElement;
  Object.entries(theme).forEach(([name, value]) => {
    const cssVarName = `--${name}`;
    root.style.setProperty(cssVarName, `${value}`);
  });
};

export const useTheme = () => {
  const [theme, setTheme] = useState(undefined);

  const toggleTheme = () => {
    logger.debug("Toggling theme");
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
    initThemeVars(newTheme);
    saveThemePreference(newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialThemeName = root.style.getPropertyValue("--initial-theme");
    const initialTheme = initialThemeName === "light" ? light : dark;
    logger.debug("Setting initial theme to:", initialTheme);
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    // We don't want to listen for OS-level theme changes if theme has been explicitly chosen already.
    if (getThemePreference()) {
      logger.debug("Not setting up listener as user already has a preference");
      return;
    }
    logger.debug("Setting up listener");
    const onOSThemeChange = e => {
      logger.info("OS colour scheme changed")
      if (getThemePreference()) {
        logger.info("Not changing theme as user already has a preference");
        return;
      }
      const newTheme = e.matches ? dark : light;
      setTheme(newTheme);
      initThemeVars(newTheme);
    }
    const darkOSThemeMQList = window.matchMedia("(prefers-color-scheme: dark)");
    darkOSThemeMQList.addEventListener("change", onOSThemeChange);
    return () => darkOSThemeMQList.removeEventListener("change", onOSThemeChange);
  }, [])

  return [theme, toggleTheme];
};
