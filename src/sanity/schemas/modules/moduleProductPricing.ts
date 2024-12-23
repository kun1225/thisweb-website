import { defineField } from 'sanity';

import Highlight from '../../components/Highlight';

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
      title: 'Heading ID',
      name: 'headingId',
      type: 'string',
    }),
    defineField({
      title: 'Paragraph',
      name: 'paragraph',
      type: 'text',
    }),
    defineField({
      title: 'Plans',
      name: 'plans',
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
              type: 'string',
            }),
            defineField({
              title: 'Price',
              name: 'price',
              type: 'object',
              fields: [
                defineField({
                  title: 'Original Price',
                  name: 'originalPrice',
                  type: 'number',
                }),
                defineField({
                  title: 'Discounted Price',
                  name: 'discountedPrice',
                  type: 'number',
                }),
              ],
            }),
            defineField({
              title: 'Features',
              name: 'features',
              type: 'array',
              of: [
                {
                  title: 'Block',
                  type: 'block',
                  styles: [{ title: 'Paragraph', value: 'normal' }],
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Numbered', value: 'number' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      {
                        title: 'Highlight',
                        value: 'highlight',
                        component: Highlight,
                      },
                      { title: 'Strike', value: 'strike-through' },
                    ],
                    annotations: [],
                  },
                },
              ],
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
                defineField({
                  title: 'Open New Tab',
                  name: 'isOpenNewTab',
                  type: 'boolean',
                }),
                defineField({
                  title: 'Disabled',
                  name: 'isDisabled',
                  type: 'boolean',
                  initialValue: false,
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
