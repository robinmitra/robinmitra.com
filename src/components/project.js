import React from "react";

import styles from "./project.module.css";
import Languages from "./languages";

const Project = ({ title, url, description, languages }) => (
  <a className={styles.container} href={url}>
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

export default Project;