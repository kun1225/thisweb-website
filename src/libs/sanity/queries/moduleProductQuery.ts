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
    _type == "moduleProductSteps" => {
      _key,
      heading,
      paragraph,
      steps[] {
        _key,
        icon,
        heading,
        paragraph,
        media,
      },
    },
    _type == "moduleProductFeatures" => {
      _key,
      heading,
      paragraph,
      features[] {
        _key,
        icon,
        heading,
        paragraph,
        media,
      },
    },
    _type == "moduleProductAbout" => {
      _key,
      heading,
      paragraph,
      achievements[] {
        _key,
        value,
        paragraph,
      },
    },
    _type == "moduleProductPricing" => {
      _key,
      heading,
      paragraph,
      plans[] {
        _key,
        heading,
        price,
        features,
        cta {
          url,
          label,
        },
      },
    },
  },
}[0]`;
