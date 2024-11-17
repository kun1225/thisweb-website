import { defineField } from 'sanity';

export default defineField({
  title: 'Module Product Pricing',
  name: 'moduleProductPricing',
  type: 'object',
  fields: [
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'array',
      of: [
        defineField({
          title: 'Price Item',
          name: 'priceItem',
          type: 'object',
          fields: [
            defineField({
              title: 'Heading',
              name: 'heading',
              type: 'text',
            }),
            defineField({
              title: 'Paragraph',
              name: 'paragraph',
              type: 'text',
            }),
            defineField({
              title: 'Call to Action',
              name: 'cta',
              type: 'object',
              fields: [
                defineField({
                  title: 'Url',
                  name: 'url',
                  type: 'string',
                }),
                defineField({
                  title: 'Label',
                  name: 'label',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      heading: 'heading',
    },

    prepare({ heading }) {
      return {
        title: heading ? `Prices - ${heading}` : 'Module Prices',
      };
    },
  },
});
