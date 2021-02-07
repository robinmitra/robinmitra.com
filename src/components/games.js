import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";

import styles from "./games.module.css";
import Game from "./game";
import { ThemeContext } from "../providers/theme";

const Games = () => {
  const { allSteamGame: { nodes } } = useStaticQuery(
    graphql`
      {
        allSteamGame {
          nodes {
            id
            name
            playtime_2weeks
            playtime_forever
            img_icon_url
            img_logo_url
            steamId
          }
        }
      }
    `,
  );

  return (
    <section className={styles.container}>
      <h2>Recent games</h2>
      <div className={styles.gamesContainer}>
        {nodes.map(node => (
          <Game
            key={node.id}
            id={node.steamId}
            title={node.name}
            imageHash={node.img_icon_url}
            recentPlaytime={node.playtime_2weeks}
            totalPlaytime={node.playtime_forever}
          />
        ))}
      </div>
    </section>
  );
};

export default Games;