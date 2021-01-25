import React from "react";

import styles from "./header.module.css";
import ThemeToggle from "./themeToggle";

const Header = () => (
  <header className={styles.container}>
    <h1 className={styles.heading}>Aloha!</h1>
    <ThemeToggle />
  </header>
);

export default Header;