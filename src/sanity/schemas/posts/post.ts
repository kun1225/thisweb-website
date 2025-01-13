import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Done', value: 'done' },
          { title: 'Doing', value: 'doing' },
          { title: 'VIP', value: 'VIP' },
        ],
      },
      initialValue: 'doing',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    }),
    defineField({
      name: 'secondLevelCategory',
      title: 'Second Level Category',
      type: 'reference',
      to: { type: 'secondLevelCategory' },
      options: {
        filter: ({ document }) => {
          if (!document.category) return {};
          return {
            filter: 'title in $category->secondLevelCategory[]->title',
            params: {
              category: document.category,
            },
          };
        },
      },
    }),
    defineField({
      name: 'thirdLevelCategory',
      title: 'Third Level Category',
      type: 'reference',
      to: { type: 'thirdLevelCategory' },
      options: {
        filter: ({ document }) => {
          if (!document.secondLevelCategory) return {};
          return {
            filter: 'title in $secondLevelCategory->thirdLevelCategory[]->title',
            params: {
              category: document.secondLevelCategory,
            },
          };
        },
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      title: 'SEO + Share Settings',
      name: 'sharing',
      type: 'sharing',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { date } = selection;
      let day = new Date(date).getDate();
      let month = new Date(date).getMonth() + 1;
      let year = new Date(date).getFullYear();

      return { ...selection, subtitle: date && `${year}-${month}-${day}` };
    },
  },
});
