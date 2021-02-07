import React, { useContext } from "react";

import styles from "./body.module.css";

const Body = ({ children }) => {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
};

export default Body;