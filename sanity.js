import {
    createImageUrlBuilder,
    CreateCurrentUseHook,
    createClient,
} from "next-sanity";


export const config = {
    dataset:process.env.NEXT_PUBLIC_SANITY_DATABASE || "medium",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:"2021-03-25",
    useCdn: process.env.NODE_ENV === "medium",
}

export const sanityClient =  createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);