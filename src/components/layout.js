import React from "react"
import PropTypes from "prop-types"

import styles from "./layout.module.css"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
