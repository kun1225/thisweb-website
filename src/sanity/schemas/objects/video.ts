import { DocumentVideoIcon, ImageIcon, PlayIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Video',
  name: 'video',
  //@ts-ignore
  icon: DocumentVideoIcon,
  type: 'object',
  fields: [
    defineField({
      title: 'File',
      name: 'file',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
      description: 'Recommended under 3MB. Accepts only mp4',
    }),
    defineField({
      title: 'File for mobile',
      name: 'fileMobile',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
      description: 'Recommended under 3MB. Accepts only mp4',
    }),
    defineField({
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      //@ts-ignore
      icon: ImageIcon,
      fields: [
        {
          title: 'Alt text',
          name: 'alt',
          type: 'string',
          description: 'Video thumbnail appears before video begins playing',
        },
      ],
    }),
    defineField({
      title: 'Enable video controls',
      name: 'controls',
      type: 'boolean',
      initialValue: false,
      hidden: ({ document }) => document?._type !== 'pWorkSingle',
    }),
  ],
  preview: {
    select: {
      fileName: 'file.asset.originalFilename',
      thumbnail: 'thumbnail',
    },
    prepare({ fileName, thumbnail }) {
      return {
        title: fileName || 'Missing video',
        media: thumbnail?.asset || PlayIcon,
      };
    },
  },
});
