import React from 'react';
import styles from './Privacy.module.css';
import PrivacyImage from '../../assets/privacy-items/anon.png';
import SandGlassImage from '../../assets/privacy-items/sandglass.png';
import VPNImage from '../../assets/privacy-items/vpn.png';
import ChatImage from '../../assets/privacy-items/chat.png';
import DollarImage from '../../assets/privacy-items/dollar.png';
import PrivacyCard from '../UI/PrivacyCard/PrivacyCard';

const Privacy = () => {
  const privacyContent = [
    {
      img: PrivacyImage,
      text: 'Your account and identity will always remain anonymous.',
    },
    {
      img: SandGlassImage,
      text: 'Our boosters will deliver your services in no time.',
    },
    {
      img: VPNImage,
      text: 'For your account safety,our booster will play from your country or server via VPN.',
    },
    {
      img: ChatImage,
      text: '7/24 help opportunities with our staffs,we are always here for you !',
    },
    {
      img: DollarImage,
      text: 'Various and reasonable payment methods.',
    },
  ];

  return (
    <section className={styles['privacy-container']}>
      {privacyContent.map((privacy, idx) => (
        <PrivacyCard text={privacy.text} img={privacy.img} key={idx} />
      ))}
    </section>
  );
};

export default Privacy;
