import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
   projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache,
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export async function getAuthors() {
    const authors = await client.fetch('*[_type == "author"]')
    return authors
  }

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({title})
  return result
}
