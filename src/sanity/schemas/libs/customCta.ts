import { LinkIcon } from '@sanity/icons';
import { defineField } from 'sanity';

export function customCta({
  title,
  name,
  ...props
}: {
  title?: string;
  name?: string;
  [key: string]: any;
}) {
  return defineField({
    title: title || 'Call to Action',
    name: name || 'cta',
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
    ...props,
    preview: {
      select: {
        title: 'label',
        subtitle: 'url',
      },
      //@ts-ignore
      icon: LinkIcon,
    },
  });
}
