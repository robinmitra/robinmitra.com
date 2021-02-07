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

const script = (t) => {
  const getInitialTheme = () => {
    const { light, dark } = t;
    let theme = light;
    const preferredTheme = window.localStorage.getItem("theme");
    if (preferredTheme) theme = preferredTheme === "light" ? light : dark;
    return theme;
  };

  const theme = getInitialTheme();

  const root = document.documentElement;

  Object.entries(theme).forEach(([name, value]) => {
    const cssVarName = `--${name}`;
    root.style.setProperty(cssVarName, `${value}`);
  });

  root.style.setProperty("--initial-theme", theme.label);
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<Script>{script}</Script>);
};