import { defineField } from 'sanity';

export function testimonials() {
  return defineField({
    title: 'Testimonials',
    name: 'testimonials',
    type: 'object',
    group: 'testimonials',
    fields: [
      defineField({
        title: 'Heading',
        name: 'heading',
        type: 'string',
      }),
      defineField({
        title: 'Testimonials',
        name: 'testimonials',
        type: 'array',
        of: [
          defineField({
            type: 'text',
            name: 'paragraph',
          }),
        ],
      }),
    ],
  });
}
