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
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'orderNumber',
    },
  }
})
