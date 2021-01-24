import React from "react";

import styles from "./game.module.css";

const getGameUrl = id => `https://steamcommunity.com/app/${id}`

const getGameImageUrl = ({ id, imageHash }) => {
  return `http://media.steampowered.com/steamcommunity/public/images/apps/${id}/${imageHash}.jpg`;
};

const getDuration = minutes => {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs ? `${hrs} hours ` : ""}${mins} minutes`
};

const Game = ({ id, title, imageHash, totalPlaytime, recentPlaytime }) => (
  <a className={styles.container} href={getGameUrl(id)}>
    <article>
      <img className={styles.image} src={getGameImageUrl({ id, imageHash })} alt="" />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.duration}>Played {getDuration(totalPlaytime)} on Steam</p>
    </article>
  </a>
);

export default Game;