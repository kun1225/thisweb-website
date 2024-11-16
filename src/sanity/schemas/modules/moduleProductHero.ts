import { defineField } from 'sanity';

export default defineField({
  title: 'Module Product Hero',
  name: 'moduleProductHero',
  type: 'object',
  fields: [
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
    }),
    defineField({
      title: 'Paragraph',
      name: 'paragraph',
      type: 'text',
    }),
    defineField({
      title: 'Media',
      name: 'media',
      type: 'media',
    }),
    defineField({
      title: 'Call to Action',
      name: 'callToAction',
      type: 'object',
      fields: [
        defineField({
          title: 'Url',
          name: 'url',
          type: 'string',
        }),
        defineField({
          title: 'Label',
          name: 'label',
          type: 'string',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      heading: 'heading',
    },

    prepare({ heading }) {
      return {
        title: `Module Product Hero - ${heading}`,
      };
    },
  },
});
