import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Articles = defineDocumentType(() => ({
  name: 'Articles',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    desc: { type: 'string', required: true },
    date: { type: 'date', required: true },
    isActive: { type: 'boolean', required: false, default: true },
    showAt: { type: 'enum', options: ['index', 'articles'], require: false, default: 'articles'}
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/articles/${article._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: 'articles', documentTypes: [Articles] });
