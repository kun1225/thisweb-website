import { groq } from 'next-sanity';

export const settingsLLMsQuery = groq`
  *[
    _type == 'settingsLLMs'
  ][0] {
    description
  }`;
