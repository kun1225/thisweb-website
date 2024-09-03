import { SquareIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Posts Megamenu',
  name: 'postsMegamenu',
  type: 'document',
  //@ts-ignore
  icon: SquareIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Posts Megamenu',
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          title: 'Category',
          name: 'category',
          type: 'object',
          fields: [
            defineField({
              title: 'Title',
              name: 'title',
              type: 'string',
            }),
            defineField({
              title: 'Description',
              name: 'description',
              type: 'text',
            }),
            defineField({
              title: 'Category Item',
              name: 'categoryItem',
              type: 'reference',
              to: [{ type: 'category' }],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return { title };
    },
  },
});
