import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="heading">Aloha!</h1>
    <p>I'm Robin, a software engineer with a passion for building things for the cloud.</p>
    <ul className="social-links">
      <li><a href="https://github.com/robinmitra/">GitHub</a></li>
      <li><a href="https://twitter.com/robinmitra/">Twitter</a></li>
      <li><a href="https://www.linkedin.com/in/robinmitra/">LinkedIn</a></li>
    </ul>
  </Layout>
)

export default IndexPage
