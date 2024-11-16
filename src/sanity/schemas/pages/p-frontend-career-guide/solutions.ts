import { defineField } from 'sanity';

export function solutions() {
  return defineField({
    title: 'Solutions',
    name: 'solutions',
    type: 'object',
    group: 'solutions',
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
  });
}
