import { defineField } from 'sanity';

export default function moduleProduct() {
  return defineField({
    title: 'Modules',
    name: 'modules',
    type: 'array',
    of: [
      { type: 'moduleProductHero' },
      { type: 'moduleProductProblems' },
      { type: 'moduleProductSolutions' },
      { type: 'moduleProductSteps' },
      { type: 'moduleProductFeatures' },
      { type: 'moduleProductAbout' },
      { type: 'moduleProductTestimonials' },
      { type: 'moduleProductPricing' },
      { type: 'moduleProductFAQs' },
    ],
  });
}
