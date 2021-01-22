import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import Body from "../components/body"
import SocialLinks from "../components/socialLinks"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Greeting />
    <Body>
        <p>I'm Robin, a software engineer with a passion for building things for the cloud.</p>
    </Body>
    <SocialLinks />
  </Layout>
)

export default IndexPage
