import { getPostSlug } from '../../posts/api/apiPosts';

export const generatePostStaticParams = async () => {
  const allPostsSlug = await getPostSlug();
  return allPostsSlug.map((slug) => ({ slug }));
};
