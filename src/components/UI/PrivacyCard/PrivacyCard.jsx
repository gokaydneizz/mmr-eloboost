import React from 'react';
import styles from './PrivacyCard.module.css';

const PrivacyCard = ({text, img}) => {
  return (
    <div className={styles['privacy-card-container']}>
      <img
        className={styles['privacy-card-image']}
        src={img}
        alt='privacy-img'
      />
      <div className={styles.line}></div>
      <p className={styles['privacy-card-text']}>{text}</p>
    </div>
  );
};

export default PrivacyCard;
