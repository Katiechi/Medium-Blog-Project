import "styles/globals.css";

import Head from 'next/head';
import TopHeader from '../components/TopHeader';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <TopHeader />
      
    </div>
  )
}
