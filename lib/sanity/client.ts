import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: 'y2uwkfdt',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03',
  token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN
})

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) =>{
  return builder.image(source)
}