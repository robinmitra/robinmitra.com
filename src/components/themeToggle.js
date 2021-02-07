import React, { useContext } from "react";
import classNames from "classnames";

import { ThemeContext } from "../providers/theme";
import { light, dark } from "../config/themes";
import styles from "./themeToggle.module.css";

const Sun = ({ toggle }) => <div className={classNames(styles.celestial, styles.sun)} onClick={toggle} />;

const Moon = ({ toggle }) => <div className={classNames(styles.celestial, styles.moon)} onClick={toggle} />;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <input
        className={styles.checkBox}
        type="checkbox"
        checked={theme === dark}
      />
      {theme === light ? (
        <Moon toggle={toggleTheme} />
      ) : (
        <Sun toggle={toggleTheme} />
      )}
    </div>
  );
};

export default ThemeToggle;
