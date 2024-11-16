import { defineField } from 'sanity';
export function features() {
  return defineField({
    title: 'Features',
    name: 'features',
    type: 'object',
    group: 'features',
    fields: [
      defineField({
        title: 'Heading',
        name: 'heading',
        type: 'string',
      }),
      defineField({
        title: 'Features',
        name: 'features',
        type: 'array',
        of: [
          defineField({
            title: 'Feature',
            name: 'feature',
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
