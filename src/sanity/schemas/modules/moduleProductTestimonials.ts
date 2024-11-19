import { defineField } from 'sanity';

export default defineField({
  title: 'Module Product Testimonials',
  name: 'moduleProductTestimonials',
  type: 'object',
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
  preview: {
    select: {
      heading: 'heading',
    },

    prepare({ heading }) {
      return {
        title: heading ? `Testimonials - ${heading}` : 'Module Testimonials',
      };
    },
  },
});
