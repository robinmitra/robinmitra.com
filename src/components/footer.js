import React, { useContext } from "react";

import styles from "./footer.module.css";
import SocialLinks from "./socialLinks";
import { ThemeContext } from "../providers/theme";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={styles.container} style={{ color: theme.text }}>
      <SocialLinks />
      <p>Made by Robin using <a href="https://www.gatsbyjs.com">Gatsby</a></p>
    </footer>
  );
};

export default Footer;