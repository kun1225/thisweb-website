import { defineField } from 'sanity';

export function bonuses() {
  return defineField({
    title: 'Bonuses',
    name: 'bonuses',
    type: 'object',
    group: 'bonuses',
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
  });
}
