import { defineType, defineArrayMember, defineField } from 'sanity';
import { ArrowTopRightIcon, LinkIcon, ImageIcon, PlayIcon, EnvelopeIcon } from '@sanity/icons';
import { FaCodepen, FaRegLightbulb } from 'react-icons/fa6';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
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
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            // @ts-ignore
            icon: ArrowTopRightIcon,
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
            // @ts-ignore
            icon: LinkIcon,
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
      //@ts-ignore
      options: { hotspot: true },
      //@ts-ignore
      icon: ImageIcon,
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
          media: 'asset',
          alt: 'alt',
        },

        prepare({ media, alt }) {
          return {
            title: alt || 'Image',
            media,
          };
        },
      },
    }),
    defineArrayMember({
      name: 'Video',
      type: 'file',
      // @ts-ignore
      icon: PlayIcon,
      // @ts-ignore
      options: { hotspot: true },
      preview: {
        select: {
          media: 'asset',
        },
        prepare({ media }) {
          return {
            title: 'Video',
            media,
          };
        },
      },
    }),
    defineArrayMember({
      name: 'Callout',
      type: 'callout',
      title: 'Callout',
      //@ts-ignore
      icon: FaRegLightbulb,
    }),
    defineArrayMember({
      title: 'Kit Form',
      name: 'kitForm',
      type: 'object',
      // @ts-ignore
      icon: EnvelopeIcon,
      fields: [
        defineField({
          title: 'Title',
          name: 'title',
          type: 'text',
          rows: 2,
        }),
        defineField({
          title: 'Subtitle',
          name: 'subtitle',
          type: 'string',
        }),
        defineField({
          title: 'Paragraph',
          name: 'paragraph',
          type: 'text',
        }),
        defineField({
          title: 'Media',
          name: 'media',
          type: 'media',
        }),
        defineField({
          title: 'Form Id',
          name: 'formId',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Button Label',
          name: 'btnLabel',
          type: 'string',
          description: 'Default: 免費領取',
        }),
        defineField({
          title: 'Success Message',
          name: 'successMessage',
          type: 'string',
          description: 'Default: 已送出！記得檢查你的 Email 喔！',
        }),
      ],
      preview: {
        select: {
          title: 'title',
          formId: 'formId',
        },
        prepare({ title, formId }) {
          return {
            title: title || 'Kit Form - No Title',
            subtitle: `Form Id: ${formId}`,
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
          { title: 'jsx', value: 'jsx' },
          { title: 'tsx', value: 'tsx' },
          { title: 'template', value: 'template' },
        ],
        withFilename: true,
      },
    }),
    defineArrayMember({
      name: 'Codepen',
      type: 'codepen',
      title: 'Codepen',
      //@ts-ignore
      icon: FaCodepen,
    }),
  ],
});
