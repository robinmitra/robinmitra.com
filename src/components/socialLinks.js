import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin, faSteam } from "@fortawesome/free-brands-svg-icons";

import styles from "./socialLinks.module.css";

const SocialLinks = () => {
  return (
    <ul className={styles.container}>
      <li>
        <a href="https://github.com/robinmitra/">
          <FontAwesomeIcon icon={faGithub} />
          <span className={styles.linkText}>GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/robinmitra/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className={styles.linkText}>Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://steamcommunity.com/id/robinmitra/">
          <FontAwesomeIcon icon={faSteam} />
          <span className={styles.linkText}>Steam</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/robinmitra/">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className={styles.linkText}>LinkedIn</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;