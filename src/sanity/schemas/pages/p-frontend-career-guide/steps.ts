import { defineField } from 'sanity';

export function steps() {
  return defineField({
    title: 'Steps',
    name: 'steps',
    type: 'object',
    group: 'steps',
    fields: [
      defineField({
        title: 'Title',
        name: 'title',
        type: 'string',
      }),
      defineField({
        title: 'Steps',
        name: 'steps',
        type: 'array',
        of: [
          defineField({
            title: 'Step',
            name: 'step',
            type: 'object',
            fields: [
              defineField({
                title: 'Icon',
                name: 'icon',
                type: 'iconPicker',
                options: {
                  outputFormat: 'react',
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
  });
}
