import { defineField } from 'sanity';

import Highlight from '../../components/Highlight';

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
      title: 'Heading ID',
      name: 'headingId',
      type: 'string',
    }),
    defineField({
      title: 'Subheading',
      name: 'subheading',
      type: 'string',
    }),
    defineField({
      title: 'Paragraph',
      name: 'paragraph',
      type: 'text',
    }),
    defineField({
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [
        defineField({
          title: 'Testimonial',
          name: 'testimonial',
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Role',
              name: 'role',
              type: 'string',
            }),
            defineField({
              title: 'Image',
              name: 'image',
              type: 'image',
            }),
            defineField({
              title: 'Quote',
              name: 'quote',
              type: 'array',
              of: [
                {
                  title: 'Block',
                  type: 'block',
                  styles: [{ title: 'Paragraph', value: 'normal' }],
                  lists: [],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      {
                        title: 'Highlight',
                        value: 'highlight',
                        component: Highlight,
                      },
                    ],
                    annotations: [],
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              name: 'name',
              role: 'role',
            },

            prepare({ name, role }) {
              return {
                title: name ? name : 'Unknown',
                subtitle: role ? role : '',
              };
            },
          },
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
