import React from "react";

import "./src/styles/global.css";
import themes from "./src/config/themes";

const Script = ({ children }) => {
  // We are doing a couple of interesting things here:
  // 1. Passing the themes as argument to the script: this ensures that the script will have a reference to the themes
  //    object when it is actually executed on user's browser, as otherwise it will be lost after the minification stage.
  // 2. The theme object is stringified: this ensures the themes object is actually passed as a valid object that can
  //    be parsed. Without this, `[Object object]` will be sent to the script as it is within a string template and
  //    stringification of an object is `[Object object]`.
  return <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})(${JSON.stringify(themes)});` }} />;
};

const script = allThemes => {
  const { light, dark } = allThemes;

  const initThemeVars = chosenTheme => {
    const root = document.documentElement;

    root.style.setProperty("--initial-theme", chosenTheme.label);
    Object.entries(chosenTheme).forEach(([name, value]) => {
      const cssVarName = `--${name}`;
      root.style.setProperty(cssVarName, `${value}`);
    });
  };

  // Local-level theme preference.
  const preferredThemeLabel = window.localStorage.getItem("theme");

  // OS-level theme preference.
  const darkOSThemeMQList = window.matchMedia("(prefers-color-scheme: dark)");
  const darkOSThemeEnabled = darkOSThemeMQList.matches === true;

  if (preferredThemeLabel) {
    return void initThemeVars(preferredThemeLabel === "light" ? light : dark);
  }

  initThemeVars(darkOSThemeEnabled ? dark : light);
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<Script>{script}</Script>);
};