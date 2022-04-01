import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import styles from './navbar.module.scss';

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`${styles.nav} ${styles[theme]}`}>
      <h1>Best Logo</h1>

      <ul>
        <li> About</li>
        <li> Design</li>
        <li> Pricing</li>
        <li> Contact</li>
      </ul>
    </nav>
  );
};
