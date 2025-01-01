import '@/src/app/_styles/prism.css';

import { notFound } from 'next/navigation';
import { PagePost, generatePostMetadata, generatePostStaticParams } from '@/src/pages/post';
import { getPost } from '@/src/pages/post/api/apiPost';

export const generateStaticParams = async () => {
  return generatePostStaticParams();
};

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  return generatePostMetadata({ params });
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const currentPost = await getPost({ slug: params.slug });
  if (!currentPost) notFound();

  // const relatedPosts = await sanityFetch<TypePost[]>({
  //   query: RELATED_POSTS_QUERY,
  //   queryParams: {
  //     categoryTitle: currentPost.category,
  //     secondLevelCategory: currentPost.secondLevelCategory,
  //   },
  //   tags: ['post'],
  // });

  return <PagePost currentPost={currentPost} />;
}
