import React from 'react';
import {ServicesCard, ValorantCard} from '../UI/ServicesCard/ServicesCard';
import styles from './Services.module.css';

const Services = () => {
  const cardContent = [
    {
      title: 'SOLOQ BOOSTING',
      text: 'Our booster will deliver your account to the rank you desire.',
      button: 'BUY',
    },
    {
      title: 'DUO BOOST',
      text: 'You are going to play with one of our boosters and climb together !',
      button: 'BUY',
    },
    {
      title: 'NET WIN',
      text: 'Our booster will win the amount of matches that you desired.',
      button: 'BUY',
    },

    {
      title: 'PLACEMENT MATCHES',
      text: 'Our booster will give you a head start for the season with the placement matches.',
      button: 'BUY',
    },
    {
      title: 'COACHING',
      text: 'Our booster will improve your gameplay via his experiences. You may stream your gameplay to him or you can send your videos.',
      button: 'BUY',
    },
  ];

  return (
    <section className={styles.services}>
      <h1 className={styles['services-title']}>SERVICES</h1>
      <div className={styles['service-cards-container']}>
        {cardContent.map((content, idx) => (
          <ServicesCard
            key={idx}
            title={content.title}
            text={content.text}
            button={content.button}
          />
        ))}
        <ValorantCard />
      </div>
    </section>
  );
};

export default Services;
