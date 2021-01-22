import React from "react"
import PropTypes from "prop-types"

import styles from './layout.module.css'
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
