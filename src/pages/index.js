import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.scss';
import Button from '@mui/material/Button';

const features = [
  {
    title: 'Real Analysis',
    content:
      "This site is all about facilitating the study of real analysis, a field of mathematics characterized by the rigorous study of the behavior of real numbers, sequences and series of real numbers, and real functions. Real analysis has a reputation for being one of the most challenging math courses one is likely to encounter when learning the ropes of mathematics. This site aims to make things a bit easier. And more enjoyable!",
  },
  {
    title: 'Walter Rudin',
    content:
      "Many good resources exist for studying real analysis, but Walter Rudin's \"Principles of Mathematical Analysis\" (affectionately or traumatically known as \"Baby Rudin\") is arguably one of the most elegant. This site is, in part, dedicated to getting the most out of Baby Rudin, something that is difficult or nearly impossibly to do without a guide. Francis Su is our guide, as he has generously provided taped lectures where he covers much of the material in the first seven chapters of the book.",
  },
  {
    title: 'Open Source',
    content:
      "While much of the site is dedicated to getting the most out of Baby Rudin, the entirety of the site is dedicated to facilitating the study of real analysis for all who have the desire and perseverance to learn. Francis Su is a wonderful guide, and his lectures serve as a great foundation for further study and work, but he is not the only one capable of contributing highly valuable content in the realm of learning real analysis. Remember: If you want to go fast, go alone; if you want to go far, then go together. We are all in this together! Everyone has something to contribute.",
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Real Analysis Blog'}
    >
      <div className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--sm')}
            alt="Real Analysis Blog Logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted} >
            <Button variant="contained" color="inherit">
              <Link className={styles.checkItOut} to={useBaseUrl('docs/intro')}>
                <span style={{ fontFamily: 'IBM Plex Sans' }}>Begin</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;