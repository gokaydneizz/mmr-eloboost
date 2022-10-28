import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/navbar-items/logo2.png';
import Cart from '../../assets/navbar-items/cart.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['logo-container']}></div>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link}>Boosting</Link>
        </li>
        <li>
          <Link className={styles.link}>About</Link>
        </li>
        <li>
          <Link className={styles.link}>EN</Link>
        </li>
        <li>
          <img className={styles['cart-icon']} src={Cart} alt='cart' />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
