import React, { useContext } from "react";

import styles from "./footer.module.css";
import SocialLinks from "./socialLinks";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <SocialLinks />
      <p>Made by Robin using <a href="https://www.gatsbyjs.com">Gatsby</a></p>
    </footer>
  );
};

export default Footer;