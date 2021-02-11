import React from "react";

import styles from "./notFound.module.css";

const NotFound = () => (
  <section className={styles.container}>
    <h1>Not found!</h1>
    <p>Nothing here...let's go <a href="/">home</a></p>
  </section>
);

export default NotFound;
