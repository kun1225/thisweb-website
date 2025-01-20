import { defineField, defineType } from 'sanity';
import CodePenPreview from '../../components/CodepenPreview';

export default defineType({
  name: 'codepen',
  title: 'Codepen',
  type: 'object',
  preview: {
    select: {
      url: 'url',
      themeId: 'themeId',
    },
    //@ts-ignore
    component: CodePenPreview,
  },
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'CodePen URL',
    }),
    defineField({
      name: 'themeId',
      type: 'string',
      title: 'Theme ID',
      description: 'You can use "light" and "dark" also.',
    }),
  ],
});
