import { groq } from 'next-sanity';

export const pProductAllUrlQuery = groq`*[_type == "pProduct" && defined(slug.current)][].slug.current`;

export const pProductSharingQuery = groq`*[_type == "pProduct" && defined(slug.current) && slug.current == $slug]{
  sharing
}[0]`;

export const pProductDataQuery = groq`*[_type == "pProduct" && defined(slug.current) && slug.current == $slug]{
  modules[] {
    _type,
    _type == "moduleProductHero" => {
      _key,
      heading,
      paragraph,
      media,
      callToAction {
        url,
        label,
      }
    },
    _type == "moduleProductProblems" => {
      _key,
      heading,
      paragraph,
      problems[] {
        _key,
        icon,
        heading,
        paragraph,
      },
    },
    _type == "moduleProductSolutions" => {
      _key,
      heading,
      paragraph,
      solutions[] {
        _key,
        heading,
        paragraph,
        media,
      },
    },
  },
}[0]`;
