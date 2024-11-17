import { defineField } from 'sanity';

export default defineField({
  title: 'Module Product Solutions',
  name: 'moduleProductSolutions',
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
      title: 'Solutions',
      name: 'solutions',
      type: 'array',
      of: [
        defineField({
          title: 'Solution',
          name: 'solution',
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
        title: heading ? `Solutions - ${heading}` : 'Module Solution',
      };
    },
  },
});
