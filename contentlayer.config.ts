import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

export const Articles = defineDocumentType(() => ({
  name: 'Articles',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    desc: { type: 'string', required: true },
    date: { type: 'date', required: true },
    isActive: { type: 'boolean', required: true, default: true },
    isInIndex: { type: 'boolean', required: false },
    topic: {
      type: 'enum',
      options: [
        'JavaScript',
        'css',
        'React',
        'Vue',
        'software design',
        'others',
        'effect',
      ],
      require: false,
      default: 'JavaScript',
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
    rehypePlugins: [rehypeSlug, rehypeCodeTitles, [rehypePrism]],
  },
});
