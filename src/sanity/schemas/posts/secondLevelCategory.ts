import { defineField, defineType } from 'sanity';
import { TagIcon } from '@sanity/icons';

export default defineType({
  name: 'secondLevelCategory',
  title: 'Second Level Category',
  type: 'document',
  //@ts-ignore
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
    }),
    defineField({
      name: 'thirdLevelCategory',
      title: 'Third Level Category',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'thirdLevelCategory' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'priority',
    },
  },
});
