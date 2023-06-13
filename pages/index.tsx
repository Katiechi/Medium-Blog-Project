import "styles/globals.css";
import { Post } from "../typings";
import React from 'react';
import { client , urlFor} from '../sanity';


import Head from 'next/head';
import TopHeader from '../components/TopHeader';
import Banner from '../components/Banner';

import styles from '../styles/Home.module.css';

import Link from "next/link";
import { Author } from "../typings";




interface Props{
  authors:Author[],
  posts:Post[]
  
}

export default function Home({authors, posts}: Props) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <TopHeader />
        <Banner />
        {/*Posts*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:px-6">
        {posts.map(post => {
  // Find the author of this post
  const author = authors.find(author => author._id === post.author._ref);

  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className="border rounded-lg group cursor-pointer overflow-hidden" >
        <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage.asset)} alt={post.title} />
        <div className="flex justify-between p-5 bg-white">
          
            <div >
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-xs">By {author ? author.name : 'Unknown'}</p>
            </div>
            
          
            {author && author.image && <img className="h-12 w-12 rounded-full" src={urlFor(author.image.asset)} alt={author.name} />}
          
        </div>
      </div>
    </Link>
  );
})}

</div>



    </div>
  )
}


// ...

export async function getServerSideProps() {
  const query = `*[_type == "post" ] `;
  const query2 = `*[_type == "author" ]`
  const posts = await client.fetch(query)
  const authors = await client.fetch(query2)

  return {
    props: {
      posts,
      authors
    }
  }
}
