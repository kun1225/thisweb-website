import { EyeOpenIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'LLMs Settings',
  name: 'settingsLLMs',
  type: 'document',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'description',
      type: 'text',
      rows: 30,
      description:
        'The main description for LLMs of the site. Please refer to https://github.com/AnswerDotAI/llms-txt and https://x.com/llmsdottxt/status/1858359621204824376',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'LLMs Settings',
      };
    },
  },
});
