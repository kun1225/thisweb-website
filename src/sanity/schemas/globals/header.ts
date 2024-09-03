import { LinkIcon, StackCompactIcon } from '@sanity/icons';
import { apiVersion } from '../../env';
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
          title: 'Megamenu Button',
          name: 'megamenuButton',
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
              console.log(content);
              return { title, subtitle: `Content : " ${content} "` };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Nav Content' };
    },
  },
});
