import { defineField, defineType } from 'sanity';
import { solutions } from './solutions';
import { steps } from './steps';
import { features } from './features';
import { about } from './about';
import { bonuses } from './bonuses';
import { testimonials } from './testimonials';
import { prices } from './prices';

export default defineType({
  title: 'Frontend Career Guide Page',
  name: 'pageFrontendCareerGuide',
  type: 'document',
  groups: [
    { title: 'Problems', name: 'problems' },
    { title: 'Solutions', name: 'solutions' },
    { title: 'Steps', name: 'steps' },
    { title: 'Features', name: 'features' },
    { title: 'About', name: 'about' },
    { title: 'Bonuses', name: 'bonuses' },
    { title: 'Testimonials', name: 'testimonials' },
    { title: 'Pricing', name: 'pricing' },
    { title: 'Settings', name: 'settings' },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Frontend Career Guide Page',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'string',
      initialValue: '/products/frontend-career-guide',
      readOnly: true,
    }),

    defineField({
      title: 'Modules',
      name: 'modules',
      type: 'array',
      of: [{ type: 'moduleProductHero' }, { type: 'moduleProductProblems' }],
    }),

    solutions(),
    steps(),
    features(),
    about(),
    bonuses(),
    testimonials(),
    prices(),
    defineField({
      title: 'SEO + Share Settings',
      name: 'sharing',
      type: 'sharing',
      group: 'settings',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title, slug }: { title: string; slug: string }) {
      return {
        title,
        subtitle: slug,
      };
    },
  },
});
