import { defineField } from 'sanity';

export default defineField({
  title: 'Module Product Features',
  name: 'moduleProductFeatures',
  type: 'object',
  fields: [
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
    }),
    defineField({
      title: 'Subheading',
      name: 'subheading',
      type: 'string',
    }),
    defineField({
      title: 'Paragraph',
      name: 'paragraph',
      type: 'text',
    }),
    defineField({
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [
        defineField({
          title: 'Feature',
          name: 'feature',
          type: 'object',
          fields: [
            defineField({
              title: 'Icon',
              name: 'icon',
              type: 'iconPicker',
              options: {
                outputFormat: 'react',
                providers: ['fa'],
              },
            }),
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
          ],
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
        title: heading ? `Features - ${heading}` : 'Module Features',
      };
    },
  },
});
