import React from "react";

import styles from "./languages.module.css";

const Circle = ({ color }) => (
  <span className={styles.circle} style={{ backgroundColor: color }} />
);

const Language = ({ name, color }) => (
  <li className={styles.language}><Circle color={color} /> {name}</li>
);

const Languages = ({ languages }) => (
  <ul className={styles.container}>
    {languages.map(lang => <Language key={lang.id} name={lang.name} color={lang.color} />)}
  </ul>
);

export default Languages;
