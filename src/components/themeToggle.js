import React, { useContext } from "react";

import { ThemeContext } from "../providers/theme";
import { light, dark } from "../config/themes";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <input className={styles.checkBox} type="checkbox" />
      <div
        className={theme === light ? styles.moon : styles.sun}
        style={{ backgroundColor: theme === light ? dark.background : light.background }}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggle;