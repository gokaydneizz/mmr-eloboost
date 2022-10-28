import React from 'react';
import styles from './Packageboost.module.css';
import GoldRank from '../../assets/package-boost-items/gld.png';
import PlatinRank from '../../assets/package-boost-items/Platin.png';
import DiamondRank from '../../assets/package-boost-items/diamond.png';
import PackageBoostCard from '../UI/PackageBoostCard/PackageBoostCard';
import UdyrPhoto from '../../assets/package-boost-items/udyr.png';
import MasterRank from '../../assets/package-boost-items/master-rank.png';

const Packageboosts = () => {
  const packageBoostContent = [
    {offer: 'S4 TO G4', img: GoldRank, netWin: 2},
    {offer: 'G4 TO P4', img: PlatinRank, netWin: 2},
    {offer: 'P4 TO D4', img: DiamondRank, netWin: 2},
    {offer: 'D4 T0 MASTER', img: MasterRank, netWin: 1},
  ];

  return (
    <>
      <section className={styles['package-container']}>
        <h1 className={styles['package-title']}>PACKAGE BOOSTS</h1>
        <p className={styles.explanation}>
          Hover on rank images to see how much extra net win you are gonna get !
        </p>
        <div className={styles['cards-container']}>
          {packageBoostContent.map((boost, idx) => (
            <PackageBoostCard
              img={boost.img}
              offer={boost.offer}
              key={idx}
              hero={boost.hero}
              netWin={boost.netWin}
            />
          ))}
        </div>
        <img src={UdyrPhoto} alt='leona' className={styles.udyr} />
      </section>
    </>
  );
};

export default Packageboosts;
