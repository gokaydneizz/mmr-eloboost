import React from 'react';
import Navbar from '../Navbar/Navbar';
import VictoryText from '../UI/VictoryText/VictoryText';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['page-header']}>
      <Navbar />
      <VictoryText />
    </header>
  );
};

export default Header;
