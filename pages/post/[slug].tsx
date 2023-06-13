import React from 'react';
import '../../styles/globals.css';

import TopHeader from '../../components/TopHeader';
import { client } from "../../sanity";

// Define the type for a post object
type PostType = {
    _id: string;
    slug: {
        current: string;
    };
};

function PostPage({ post }) {
    console.log(post)
    return (
        <main>
            <TopHeader />
            <h1>{post.title}</h1>
            <div>{post.content}</div>
        </main>
    );
}

export default PostPage;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`;

    const posts: PostType[] = await client.fetch(query);

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug.current,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        author->{
            name,
            image
        },
        description,
        mainImage,
        title,
        slug,
        body
    }`;
    const post = await client.fetch(query, { slug });

    return {
        props: {
            post,
        },
    };
};
