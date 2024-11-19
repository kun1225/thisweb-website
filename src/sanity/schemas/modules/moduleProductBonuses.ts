import { defineField } from 'sanity';

export default defineField({
  title: 'Module ProductBonuses',
  name: 'moduleProductBonuses',
  type: 'object',
  fields: [
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
    }),
    defineField({
      title: 'Bonus',
      name: 'bonus',
      type: 'array',
      of: [
        defineField({
          title: 'Bonus Item',
          name: 'bonusItem',
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
        title: heading ? `Bonuses - ${heading}` : 'Module Bonuses',
      };
    },
  },
});
