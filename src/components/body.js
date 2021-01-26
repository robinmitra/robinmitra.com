import React, { useContext } from "react";

import styles from "./body.module.css";
import { ThemeContext } from "../providers/theme";

const Body = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={styles.container} style={{ color: theme.text }}>
      {children}
    </section>
  );
};

export default Body;