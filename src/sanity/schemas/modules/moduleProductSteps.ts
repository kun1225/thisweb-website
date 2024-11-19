import { defineField } from 'sanity';

export default defineField({
  title: 'Module Product Steps',
  name: 'moduleProductSteps',
  type: 'object',
  fields: [
    defineField({
      title: 'Heading',
      name: 'heading',
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
                providers: ['fa'],
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
              type: 'array',
              of: [
                {
                  title: 'Block',
                  type: 'block',
                  styles: [{ title: 'Paragraph', value: 'normal' }],
                  lists: [{ title: 'Bullet', value: 'bullet' }],
                  marks: {
                    decorators: [],
                    annotations: [],
                  },
                },
              ],
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
  preview: {
    select: {
      heading: 'heading',
    },

    prepare({ heading }) {
      return {
        title: heading ? `Steps - ${heading}` : 'Module Steps',
      };
    },
  },
});
