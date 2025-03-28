import { defineField } from 'sanity';

export default defineField({
  title: 'Module Product About',
  name: 'moduleProductAbout',
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
      title: 'Media',
      name: 'media',
      type: 'media',
    }),
    defineField({
      title: 'Achievements',
      name: 'achievements',
      type: 'array',
      of: [
        defineField({
          title: 'Achievement',
          name: 'achievement',
          type: 'object',
          fields: [
            defineField({
              title: 'Value',
              name: 'value',
              type: 'string',
            }),
            defineField({
              title: 'Paragraph',
              name: 'paragraph',
              type: 'string',
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
        title: heading ? `About - ${heading}` : 'Module About',
      };
    },
  },
});
