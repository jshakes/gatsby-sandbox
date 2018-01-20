import React from 'react';
import Link from 'gatsby-link';
import styles from './layout.module.scss';
import Nav from '../components/Navigation';

export default ({ children }) => (
  <div className={styles.container}>
    <header>
      <h2>My Great Site</h2>
      <Nav />
    </header>
    {children()}
  </div>
);
