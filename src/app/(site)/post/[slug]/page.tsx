// style
import '@/src/styles/prism.css';
// Sanity
import { sanityFetch } from '@/src/libs/sanity/client';
import {
  POSTS_SLUG_QUERY,
  POST_QUERY,
  RELATED_POSTS_QUERY,
} from '@/src/libs/sanity/queries';
import { toPlainText } from '@portabletext/react';
// Components
import PostTitle from './_components/PostTitle';
import PostBody from './_components/PostBody';
// Type
import { PostType } from '@/src/libs/sanity/type';
// Libs
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
  const allPostsSlug = await sanityFetch<string[]>({
    query: POSTS_SLUG_QUERY,
    tags: ['post'],
  });
  return allPostsSlug.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const currentPost = await sanityFetch<PostType>({
    query: POST_QUERY,
    queryParams: { slug: params.slug },
    tags: ['post'],
  });

  if (!currentPost)
    return {
      title: '404 | 請網這邊走 ThisWeb',
    };

  return {
    title: `${currentPost.title} | ThisWeb`,
    description: toPlainText(currentPost.body).slice(0, 75),
    author: currentPost.author,
    openGraph: {
      title: `${currentPost.title} | ThisWeb`,
      description: toPlainText(currentPost.body).slice(0, 75),
    },
  };
};

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const currentPost = await sanityFetch<PostType>({
    query: POST_QUERY,
    queryParams: { slug: params.slug },
    tags: ['post'],
  });
  if (!currentPost) notFound();

  const relatedPosts = await sanityFetch<PostType[]>({
    query: RELATED_POSTS_QUERY,
    queryParams: {
      categoryTitle: currentPost.category,
      secondLevelCategory: currentPost.secondLevelCategory,
    },
    tags: ['post'],
  });

  return (
    <article className="p-post" id="p-post">
      <PostTitle
        date={currentPost.publishedAt}
        title={currentPost.title}
        topic={currentPost.category}
      />
      <PostBody
        mainImage={currentPost.mainImage}
        currentPost={currentPost}
        relatedPosts={relatedPosts}
      />
    </article>
  );
};

export default PostPage;
