import "styles/globals.css";
import { Post } from "../typings";

import Head from 'next/head';
import TopHeader from '../components/TopHeader';
import Banner from '../components/Banner';

import styles from '../styles/Home.module.css';
import { sanityClient,urlFor } from "../sanity";

interface Props{
  posts:[Post]
}

export default function Home({posts}:Props) {
  console.log(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <TopHeader />
        <Banner />
        

    </div>
  )
}

export const getServerSideProps = async ()=> {
  const query = `*[_type == "post" ]`;

  const posts = await sanityClient.fetch(query)

  return {
    props:{
      posts,
    },
  }
}