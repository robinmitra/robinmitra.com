import React from "react";

import styles from "./game.module.css";

const getGameImageUrl = ({ id, imageHash }) => {
  return `http://media.steampowered.com/steamcommunity/public/images/apps/${id}/${imageHash}.jpg`;
};

const getDuration = minutes => {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs ? `${hrs} hours ` : ""}${mins} minutes`
};

const Game = ({ id, title, imageHash, totalPlaytime, recentPlaytime }) => (
  <a className={styles.container} href="https://steamcommunity.com/app/310950">
    <article>
      <img src={getGameImageUrl({ id, imageHash })} alt="" />
      <h2 className={styles.title}>{title}</h2>
      <p>{getDuration(totalPlaytime)} played on Steam</p>
    </article>
  </a>
);

export default Game;