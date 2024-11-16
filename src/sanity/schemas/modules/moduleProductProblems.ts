import { defineField } from 'sanity';
import { preview } from 'sanity-plugin-icon-picker';

export default defineField({
  title: 'Module Product Problems',
  name: 'moduleProductProblems',
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
              options: {
                providers: ['fa'],
                outputFormat: 'react',
              },
              preview: {
                select: {
                  provider: 'icon.provider',
                  name: 'icon.name',
                },
                // @ts-ignore
                prepare(icon) {
                  return {
                    title: icon.provider,
                    subtitle: icon.name,
                    // @ts-ignore
                    media: preview(icon),
                  };
                },
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
        title: `Module Product Problems - ${heading}`,
      };
    },
  },
});
