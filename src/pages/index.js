import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Body from "../components/body";
import SocialLinks from "../components/socialLinks";
import Projects from "../components/projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Body>
      <p>I'm Robin, a software engineer with a passion for building things for the cloud.</p>
      <SocialLinks />
    </Body>
    <Projects />
  </Layout>
);

export default IndexPage;
