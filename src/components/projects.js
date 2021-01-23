import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styles from "./projects.module.css";
import Project from "./project";

const getFilteredNodes = nodes => nodes.filter(repo => (
  !repo.isArchived && repo.owner.login === "robinmitra"
)).slice(0, 6);

const Projects = () => {
  const { github: { viewer: { repositories: { nodes } } } } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first:10, isFork: false, privacy:PUBLIC, affiliations: OWNER, orderBy:{field:PUSHED_AT, direction:DESC}) {
              nodes {
                id
                name
                url
                owner { login }
                isArchived
                description
                stargazers{ totalCount }
                forkCount
                languages(first:3, orderBy:{field: SIZE, direction: DESC}){
                  nodes { id, name, color }
                }
              }
            }
          }
        }
      }
    `,
  );

  return (
    <section className={styles.container}>
      <h2>Recent projects</h2>
      <div className={styles.projectsContainer}>
        {getFilteredNodes(nodes).map(node => (
          <Project
            key={node.id}
            title={node.name}
            url={node.url}
            description={node.description}
            languages={node.languages.nodes}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;