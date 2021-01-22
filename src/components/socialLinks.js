import React from "react"

import styles from './socialLinks.module.css'

const SocialLinks = () => {
  return (
    <ul className={styles.container}>
      <li><a href="https://github.com/robinmitra/">GitHub</a></li>
      <li><a href="https://twitter.com/robinmitra/">Twitter</a></li>
      <li><a href="https://www.linkedin.com/in/robinmitra/">LinkedIn</a></li>
    </ul>
  )
}

export default SocialLinks