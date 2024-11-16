import { defineField } from 'sanity';
export function about() {
  return defineField({
    title: 'About',
    name: 'about',
    type: 'object',
    group: 'about',
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
                title: 'Index',
                name: 'index',
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
  });
}
