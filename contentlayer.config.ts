import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

export const Articles = defineDocumentType(() => ({
  name: 'Articles',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    desc: { type: 'string', required: true },
    date: { type: 'date', required: true },
    isActive: { type: 'boolean', required: false, default: true },
    showAt: {
      type: 'enum',
      options: ['index', 'articles'],
      require: false,
      default: 'articles',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/articles/${article._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'articles',
  documentTypes: [Articles],
  mdx: {
    rehypePlugins: [rehypeCodeTitles, [rehypePrism]],
  },
});
