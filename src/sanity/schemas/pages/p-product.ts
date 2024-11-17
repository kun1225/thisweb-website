import { defineField, defineType } from 'sanity';
import moduleProduct from '../libs/moduleProduct';

export default defineType({
  title: 'Product Page',
  name: 'pProduct',
  type: 'document',
  groups: [{ title: 'Settings', name: 'settings' }],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Product Page',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'string',
      description: 'Must start with /product/',
      initialValue: '/product/...',
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
