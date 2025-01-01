import { defineField } from 'sanity';

import Highlight from '../../components/Highlight';

export default defineField({
  title: 'Module Product FAQs',
  name: 'moduleProductFAQs',
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
      title: 'FAQ List',
      name: 'faqList',
      type: 'array',
      of: [
        defineField({
          title: 'FAQ',
          name: 'faq',
          type: 'object',
          fields: [
            defineField({
              title: 'Heading',
              name: 'heading',
              type: 'string',
            }),
            defineField({
              title: 'Answer',
              name: 'answer',
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
              heading: 'heading',
            },

            prepare({ heading }) {
              return {
                title: heading ? heading : 'Unknown',
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
        title: heading ? `FAQs - ${heading}` : 'Module FAQs',
      };
    },
  },
});
