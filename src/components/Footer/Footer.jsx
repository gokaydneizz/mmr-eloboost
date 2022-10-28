import React from 'react';
import styles from './Footer.module.css';
import FacebookIcon from '../../assets/footer-items/Facebook.png';
import InstagramIcon from '../../assets/footer-items/instagram.png';
import TwitterIcon from '../../assets/footer-items/Twitter.png';

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles.socials}>
        <a
          href='https://www.facebook.com/profile.php?id=100087128405341'
          target='_blank'
          rel='noreferrer'>
          <img src={FacebookIcon} alt='' className={styles.facebook} />
        </a>
        <a
          href='https://www.instagram.com/mmreloboost/'
          target='_blank'
          rel='noreferrer'>
          <img
            src={InstagramIcon}
            alt='instagram-icon'
            className={styles.instagram}
          />
        </a>
        <a
          href='https://twitter.com/mmreloboost'
          target='_blank'
          rel='noreferrer'>
          <img
            src={TwitterIcon}
            alt='twitter-icon'
            className={styles.twitter}
          />
        </a>
      </div>
      <div className={styles.line}></div>
      <h1 className={styles['footer-title']}>
        Copyrighted by © mmreloboost.com
      </h1>
      <div className={styles.line}></div>
    </footer>
  );
};

export default Footer;
