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
      title: 'Heading ID',
      name: 'headingId',
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
      validation: (Rule) => Rule.required().max(4),
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
