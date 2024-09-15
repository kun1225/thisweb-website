// style
import '@/src/styles/prism.css';
import '@/src/styles/custom-portable-text.css';
// Sanity
import { sanityFetch, urlFor } from '@/src/libs/sanity/client';
import {
  POSTS_SLUG_QUERY,
  POST_QUERY,
  RELATED_POSTS_QUERY,
  NEXT_POSTS_QUERY,
  PREV_POSTS_QUERY,
} from '@/src/libs/sanity/queries';
import { toPlainText } from '@portabletext/react';
// Components
import PostTitle from './_components/PostTitle';
import PostNavigation from './_components/PostNavigation';
import PostBody from './_components/PostBody';
import PostSidebar from './_components/PostSidebar';
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

  const mainImageUrl =
    currentPost.mainImage && urlFor(currentPost.mainImage).width(1080).url();

  const relatedPosts = await sanityFetch<PostType[]>({
    query: RELATED_POSTS_QUERY,
    queryParams: {
      categoryTitle: currentPost.category,
      secondLevelCategory: currentPost.secondLevelCategory,
    },
    tags: ['post'],
  });

  const nextPost = await sanityFetch<PostType>({
    query: NEXT_POSTS_QUERY,
    queryParams: { publishedAt: currentPost.publishedAt },
    tags: ['post'],
  });
  const prevPost = await sanityFetch<PostType>({
    query: PREV_POSTS_QUERY,
    queryParams: { publishedAt: currentPost.publishedAt },
    tags: ['post'],
  });

  return (
    <>
      <article className="my-8 mx-edge xl:mx-auto">
        <PostTitle
          date={currentPost.publishedAt}
          title={currentPost.title}
          topic={currentPost.category}
        />
        <section className="article flex flex-col-reverse items-center xl:justify-center transition xl:flex-row ">
          <PostBody
            mainImageUrl={mainImageUrl}
            currentPost={currentPost}
            relatedPosts={relatedPosts}
          />
          <PostSidebar source={currentPost.body} />
        </section>
      </article>

      <PostNavigation nextPost={nextPost} prevPost={prevPost} />
    </>
  );
};

export default PostPage;
