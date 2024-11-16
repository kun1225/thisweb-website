import { defineField } from 'sanity';

export function hero() {
  return defineField({
    title: 'Hero',
    name: 'hero',
    type: 'object',
    group: 'hero',
    fields: [
      defineField({
        title: 'Title',
        name: 'title',
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
        title: 'Call to Action',
        name: 'callToAction',
        type: 'object',
        fields: [
          defineField({
            title: 'Url',
            name: 'url',
            type: 'string',
          }),
          defineField({
            title: 'Label',
            name: 'label',
            type: 'string',
          }),
        ],
      }),
    ],
  });
}
