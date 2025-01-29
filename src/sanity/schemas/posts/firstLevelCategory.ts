import { defineField, defineType } from 'sanity';
import { TagIcon } from '@sanity/icons';

export default defineType({
  name: 'category',
  title: 'Category',
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
      name: 'secondLevelCategory',
      title: 'Second Level Category',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'secondLevelCategory' }] }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'priority',
    },
  },
});
