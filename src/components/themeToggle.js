import React, { useContext } from "react";
import classNames from "classnames";

import { ThemeContext } from "../providers/theme";
import { light, dark } from "../config/themes";
import styles from "./themeToggle.module.css";

const Sun = ({ toggle }) => <div className={classNames(styles.celestial, styles.sun)} onClick={toggle} />;

// This is using `p`, instead of `div`, as a hack for a weirdness somewhere in Gatsby / React / my understanding of how
// it all works! Using `div` here results in the the class name for sun to appear for the moon, but only when the site
// is "built" and page opened in the browser. Clicking on the toggle button, though, fixes the issue and the correct
// class (i.e. sun / moon) is assigned. Having this element use a different tag (`p`) seems to fix this issue, so could
// be some sort of cache / optimisation getting in the way!
const Moon = ({ toggle }) => <p className={classNames(styles.celestial, styles.moon)} onClick={toggle} />;

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
