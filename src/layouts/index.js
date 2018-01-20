import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styles from './layout.module.scss';
import Nav from '../components/Navigation';
import { siteMetadata } from '../../gatsby-config';

export default ({ children }) => (
  <div className={styles.container}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ siteMetadata.title }</title>
      <link rel="canonical" href={siteMetadata.siteUrl} />
    </Helmet>
    <header>
      <h2 style={{ marginBottom: '1em' }}>{siteMetadata.title}</h2>
      <h5 style={{ marginTop: 0 }}>{siteMetadata.description}</h5>
      <Nav />
    </header>
    {children()}
  </div>
);
