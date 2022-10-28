import React from 'react';
import {Link} from 'react-router-dom';
import styles from './PackageBoostCard.module.css';

const PackageBoostCard = ({img, offer, netWin}) => {
  return (
    <div className={styles['package-card-container']}>
      <img src={img} alt='rank' className={styles['package-card-img']} />
      <Link className={styles.offer}>{offer}</Link>
      <h3 className={styles.netWin}>+{netWin} NET WIN</h3>
    </div>
  );
};

export default PackageBoostCard;
