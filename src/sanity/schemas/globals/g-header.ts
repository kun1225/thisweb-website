import { LinkIcon, StackCompactIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Header',
  name: 'gHeader',
  type: 'document',
  fields: [
    defineField({
      title: 'Nav Contents',
      name: 'navContents',
      type: 'array',
      of: [
        {
          title: 'Normal Link',
          name: 'normalLink',
          type: 'object',
          // @ts-ignore
          icon: LinkIcon,
          fields: [
            defineField({
              title: 'Link Text',
              name: 'linkText',
              type: 'string',
            }),
            defineField({
              title: 'Link URL',
              name: 'linkUrl',
              type: 'string',
            }),
            defineField({
              title: 'Is Button',
              name: 'isButton',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'linkText',
              subtitle: 'linkUrl',
            },
            prepare({ title, subtitle }) {
              return { title, subtitle: `Url : " ${subtitle} "` };
            },
          },
        },
        {
          title: 'Megamenu',
          name: 'megamenu',
          type: 'object',
          //@ts-ignore
          icon: StackCompactIcon,
          fields: [
            defineField({
              title: 'Button Text',
              name: 'buttonText',
              type: 'string',
            }),
            defineField({
              title: 'MegaMenu Content',
              name: 'megamenuContent',
              type: 'reference',
              to: [{ type: 'postsMegamenu' }],
            }),
          ],
          preview: {
            select: {
              title: 'buttonText',
              content: 'megamenuContent.title',
            },
            prepare({ title, content }) {
              return { title, subtitle: `Content : " ${content} "` };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Nav Contents' };
    },
  },
});
