import React from "react"

import styles from "./body.module.css"

const Body = ({ children }) => (
  <section className={styles.container}>
    {children}
  </section>
)

export default Body