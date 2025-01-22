import { defineField } from 'sanity';

export default defineField({
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
});
