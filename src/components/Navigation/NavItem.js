import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.scss';

const NavItem = props => {
  return (
    <li className={styles.item}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );  
};

export default NavItem;
