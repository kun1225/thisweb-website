import { defineField, defineType } from 'sanity';
import moduleProduct from '../../libs/moduleProduct';

export default defineType({
  title: 'Frontend Career Guide Page',
  name: 'pageFrontendCareerGuide',
  type: 'document',
  groups: [{ title: 'Settings', name: 'settings' }],
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

    moduleProduct(),

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
