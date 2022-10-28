import React from 'react';
import styles from './ServicesCard.module.css';

export const ServicesCard = ({title, text, button}) => {
  return (
    <article className={styles['services-card-container']}>
      <h1 className={styles['services-card-title']}>{title}</h1>
      <p className={styles['services-card-text']}>{text}</p>
      <button className={styles['services-card-button']}>{button}</button>
    </article>
  );
};

export const ValorantCard = ({title, text, button}) => {
  return (
    <article className={styles['valorant-card-container']}>
      <h1 className={styles['valorant-card-title']}>VALORANT BOOST</h1>
      <p className={styles['valorant-card-text']}>
        Valorant solo,duo boost service.You're gonna be in your desired league
        as soon as possible.
      </p>
      <button className={styles['valorant-card-button']}>COMING SOON</button>
    </article>
  );
};
