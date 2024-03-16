import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subCategory',
  title: 'SubCategory',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
