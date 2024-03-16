import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Callout',
  name: 'callout',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          // Styles let you define what blocks can be marked up as. The default
          // set corresponds with HTML tags, but you can set any title or value
          // you want, and decide how you want to deal with it where you want to
          // use your content.
          //@ts-ignore
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          // Marks let you mark up inline text in the Portable Text Editor
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
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
                    to: [{type: 'post'}],
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
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
              hidden: ({parent}: {parent: any}) => !parent?.asset,
              options: {
                isHighlighted: true,
              },
            },
          ],
        }),
    
        defineArrayMember({
          name: 'CodeField',
          type: 'code',
          title: 'Code Field',
          options: {
            language: 'javascript',
            languageAlternatives: [
              {title: 'Javascript', value: 'javascript'},
              {title: 'Typescript', value: 'typescript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'Bash', value: 'bash'},
            ],
            withFilename: true,
          },
        }),
      ],
    },
  ],
})
