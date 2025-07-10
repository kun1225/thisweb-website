import { groq } from 'next-sanity';

export const pProductAllUrlQuery = groq`*[_type == "pProduct" && defined(slug.current)][].slug.current`;

export const pProductSharingQuery = groq`*[_type == "pProduct" && defined(slug.current) && slug.current == $slug]{
  sharing {
    metaTitle,
    metaDesc,
    shareGraphic,
  }
}[0]`;

export const pProductDataQuery = groq`*[_type == "pProduct" && defined(slug.current) && slug.current == $slug]{
  modules[] {
    _type,
    _type == "moduleProductHero" => {
      _key,
      heading,
      headingId,
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
      headingId,
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
      headingId,
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
      headingId,
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
      headingId,
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
      headingId,
      paragraph,
      media,
      achievements[] {
        _key,
        value,
        paragraph,
      },
    },
    _type == "moduleProductPricing" => {
      _key,
      heading,
      headingId,
      paragraph,
      plans[] {
        _key,
        heading,
        price,
        features,
        cta {
          url,
          label,
          isOpenNewTab,
          isDisabled,
        },
      },
    },
    _type == "moduleProductTestimonials" => {
      _key,
      heading,
      subheading,
      paragraph,
      testimonials[] {
        _key,
        name,
        role,
        quote,
        image,
      },
    },
    _type == "moduleProductFAQs" => {
      _key,
      heading,
      subheading,
      paragraph,
      faqList[] {
        _key,
        heading,
        answer,
      },
    },
  },
}[0]`;
