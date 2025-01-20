import { defineType, defineField } from 'sanity';
import { customCta } from '../libs/customCta';

export default defineType({
  title: 'Recommendation',
  name: 'recommendation',
  type: 'document',
  groups: [
    { title: 'Title', name: 'title' },
    { title: 'Display Scope Section', name: 'displayScopeSection' },
    { title: 'Image Section', name: 'imageSection' },
    { title: 'Content Section', name: 'contentSection' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'title',
    }),
    defineField({
      title: 'Display Scope Section',
      name: 'displayScopeSection',
      type: 'object',
      group: 'displayScopeSection',
      fields: [
        defineField({
          title: 'Display Scope',
          name: 'displayScope',
          type: 'string',
          options: {
            list: [
              { title: 'All', value: 'all' },
              { title: 'First level category', value: 'firstLevelCategory' },
              { title: 'Second level category', value: 'secondLevelCategory' },
            ],
          },
          initialValue: 'all',
        }),
        defineField({
          title: 'First Level Category',
          name: 'firstLevelCategory',
          type: 'reference',
          to: [{ type: 'category' }],
          hidden: ({ parent }) => parent?.displayScope !== 'firstLevelCategory',
        }),
        defineField({
          title: 'Second Level Category',
          name: 'secondLevelCategory',
          type: 'reference',
          to: [{ type: 'secondLevelCategory' }],
          hidden: ({ parent }) => parent?.displayScope !== 'secondLevelCategory',
        }),
      ],
    }),
    defineField({
      title: 'Image Section',
      name: 'imageSection',
      type: 'object',
      group: 'imageSection',
      fields: [
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
        }),
        customCta({ title: 'Image CTA', name: 'imageCta' }),
      ],
    }),
    defineField({
      title: 'Content Section',
      name: 'contentSection',
      type: 'object',
      group: 'contentSection',
      fields: [
        defineField({
          title: 'Content',
          name: 'content',
          type: 'recommendationBlock',
        }),
        customCta({ title: 'Content CTA', name: 'contentCta' }),
      ],
    }),
  ],
});
