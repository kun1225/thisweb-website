import { LinkIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  title: 'Announcement',
  name: 'announcement',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'data',
      type: 'array',
      of: [Paragraph(), DueDate()],
    }),
  ],
});

function Paragraph() {
  return {
    name: 'paragraph',
    type: 'object',
    fields: [
      defineField({
        title: 'Paragraph',
        name: 'paragraph',
        type: 'array',
        of: [
          defineArrayMember({
            title: 'Block',
            type: 'block',
            styles: [{ title: 'Normal', value: 'normal' }],
            lists: [],
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Underline', value: 'underline' },
                { title: 'Strike', value: 'strike-through' },
              ],
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'URL',
                  icon: LinkIcon,
                  fields: [
                    {
                      title: 'URL',
                      name: 'href',
                      type: 'url',
                    },
                  ],
                },
              ],
            },
          }),
        ],
      }),
    ],
  };
}

function DueDate() {
  return {
    name: 'dueDate',
    type: 'object',
    fields: [
      defineField({
        title: 'Time',
        name: 'time',
        type: 'datetime',
      }),
    ],
    preview: {
      select: {
        time: 'time',
      },
      prepare(selection: any) {
        const title = Intl.DateTimeFormat('zh-TW', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date(selection.time));

        return { title: `截止至: ${title}` };
      },
    },
  };
}
