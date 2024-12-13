import { defineField, defineType } from 'sanity';
import moduleProduct from '../libs/moduleProduct';

export default defineType({
  title: 'Product Page',
  name: 'pProduct',
  type: 'document',
  groups: [{ title: 'Settings', name: 'settings' }],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Product Page',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      title: 'Announcement',
      name: 'announcement',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Paragraph',
          name: 'paragraph',
          fields: [
            defineField({
              title: 'Paragraph',
              name: 'paragraph',
              type: 'text',
            }),
          ],
        },
        {
          type: 'object',
          title: 'Due Date',
          name: 'dueDate',
          fields: [
            defineField({
              title: 'Time',
              name: 'time',
              type: 'datetime',
            }),
          ],
        },
      ],
    }),

    moduleProduct(),

    defineField({
      title: 'SEO + Share Settings',
      name: 'sharing',
      type: 'sharing',
      group: 'settings',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title, slug }: { title: string; slug: { current: string } }) {
      return {
        title,
        subtitle: slug.current,
      };
    },
  },
});
