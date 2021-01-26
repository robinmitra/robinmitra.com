import React, { useContext } from "react";

import styles from "./project.module.css";
import Languages from "./languages";
import { ThemeContext } from "../providers/theme";

const Project = ({ title, url, description, languages }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <a className={styles.container} href={url} style={{ backgroundColor: theme.card }}>
      <article>
        <div className={styles.project}>
          <h2 className={styles.title}>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.languages}>
          <Languages languages={languages} />
        </div>
      </article>
    </a>
  );
};

export default Project;