import React, { useContext } from "react";
import PropTypes from "prop-types";
import "@fontsource/pacifico";
import "@fontsource/source-code-pro";

import styles from "./layout.module.css";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div className={styles.container}>
      {showHeader && <Header />}
      <main className={styles.mainContainer}>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
