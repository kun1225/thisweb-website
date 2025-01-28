import { defineType, defineArrayMember, defineField } from 'sanity';
import { toPlainText } from 'next-sanity';

export default defineType({
  title: 'Callout',
  name: 'callout',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Can Expanded',
      name: 'isExpanded',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                icon: () => 'A',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'post' }],
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          //@ts-ignore
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
          preview: {
            select: {
              image: 'asset',
              alt: 'alt',
              caption: 'caption',
            },
            prepare({ image, alt, caption }) {
              return {
                title: alt || 'Image',
                media: image,
                subtitle: caption,
              };
            },
          },
        }),
        defineArrayMember({
          name: 'CodeField',
          type: 'code',
          title: 'Code Field',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'Javascript', value: 'javascript' },
              { title: 'Typescript', value: 'typescript' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'Bash', value: 'bash' },
            ],
            withFilename: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      text: 'text',
    },
    prepare(value) {
      return {
        title: value.title || 'No title',
        subtitle: toPlainText(value.text)?.slice(0, 50) || 'No Content',
      };
    },
  },
});
