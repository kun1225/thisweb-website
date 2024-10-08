import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Service Page',
  name: 'pageService',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Service page',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'string',
      initialValue: '/service',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      slug: 'slug',
    },
    prepare({ slug }) {
      return {
        title: 'Service Page',
        subtitle: `Slug : " ${slug} "`,
      };
    },
  },
});
