import { ImageIcon } from '@sanity/icons';
import { defineField } from 'sanity';

export function customImage({
  title,
  name,
  ...props
}: {
  title?: string;
  name?: string;
  [key: string]: any;
}) {
  return defineField({
    title: title || 'Image',
    name: name || 'image',
    type: 'image',
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
        hidden: ({ parent }: { parent: any }) => !parent?.asset,
      },
    ],
    preview: {
      select: {
        asset: 'asset',
        originalFilename: 'asset.originalFilename',
        customAlt: 'alt',
      },
      prepare({
        asset,
        originalFilename,
        customAlt,
      }: {
        asset: any;
        originalFilename: string;
        customAlt: string;
      }) {
        return {
          title: !asset ? 'Missing image' : customAlt || originalFilename,
          media: asset,
        };
      },
    },
    ...props,
  });
}
