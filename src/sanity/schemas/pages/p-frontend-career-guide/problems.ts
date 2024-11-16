import { defineField } from 'sanity';

export function problems() {
  return defineField({
    title: 'Problems',
    name: 'problems',
    type: 'object',
    group: 'problems',
    fields: [
      defineField({
        title: 'Title',
        name: 'title',
        type: 'string',
      }),
      defineField({
        title: 'Problems',
        name: 'problems',
        type: 'array',
        of: [
          defineField({
            title: 'Problem',
            name: 'problem',
            type: 'object',
            fields: [
              defineField({
                title: 'Icon',
                name: 'icon',
                type: 'iconPicker',
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
            ],
          }),
        ],
      }),
    ],
  });
}
