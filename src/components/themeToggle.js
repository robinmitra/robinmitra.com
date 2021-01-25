import React, { useContext } from "react";

import { ThemeContext } from "../providers/theme";
import { light } from "../config/themes";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <input className={styles.checkBox} type="checkbox" />
      <div className={theme === light ? styles.sun : styles.moon} onClick={toggleTheme} />
    </div>
  );
};

export default ThemeToggle;