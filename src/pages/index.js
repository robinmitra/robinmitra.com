import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Body from "../components/body";
import Projects from "../components/projects";
import Games from "../components/games";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Body>
      <p>I'm Robin, a software engineer with a passion for building things for the cloud.</p>
    </Body>
    <Projects />
    <Games />
  </Layout>
);

export default IndexPage;
