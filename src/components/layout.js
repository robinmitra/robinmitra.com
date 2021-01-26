import React, { useContext } from "react";
import PropTypes from "prop-types";
import "@fontsource/pacifico";
import "@fontsource/source-code-pro";

import { ThemeContext } from "../providers/theme";
import styles from "./layout.module.css";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container} style={{ backgroundColor: theme.background }}>
      <Header />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
