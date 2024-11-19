import { defineType, defineField } from 'sanity';
import { customImage } from '../libs/customImage';

export default defineType({
  name: 'media',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          { value: 'image', title: 'Image' },
          { value: 'video', title: 'Video' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    customImage({
      hidden: ({ parent }: { parent: any }) => parent?.type !== 'image',
    }),
    defineField({
      name: 'video',
      type: 'video',
      options: {
        collapsible: false,
      },
      hidden: ({ parent }: { parent: any }) => parent?.type !== 'video',
    }),
  ],
});
