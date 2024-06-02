// style
import '../../../style/prism.css';
import '../../../style/custom-portable-text.min.css';

// Sanity
import { client } from '@/lib/sanity/client';
import {
  POSTS_SLUG_QUERY,
  POST_QUERY,
  RELATED_POSTS_QUERY,
  NEXT_POSTS_QUERY,
  PREV_POSTS_QUERY,
} from '@/lib/sanity/queries';
import { toPlainText } from '@portabletext/react';

// Components
import PostTitle from './_components/PostTitle';
import PostNavigation from './_components/PostNavigation';
import TableOfContents from './_components/tableOfContents';
import CustomPortableText from '@/app/_components/CustomPortableText';
import RelatedPosts from './_components/RelatedPosts';
import { Suspense } from 'react';
import PostPageLoading from './loading';
import Image from 'next/image';
import ImageEnlarger from '../../_components/ImageEnlarger';

// Type
import { PostType } from '@/lib/sanity/type';

// Libs
import { notFound } from 'next/navigation';
import { urlFor } from '@/lib/sanity/client';

export const generateStaticParams = async () => {
  const allPostsSlug = await client.fetch<string[]>(POSTS_SLUG_QUERY);
  return allPostsSlug.map((slug) => `post/${slug}`);
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const currentPost = await client.fetch<PostType>(POST_QUERY, {
    slug: params.slug[0],
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

const PostPage = async ({ params }: { params: { slug: string[] } }) => {
  const currentPost = await client.fetch<PostType>(POST_QUERY, {
    slug: params.slug[0],
  });

  if (!currentPost) notFound();

  const mainImageUrl =
    currentPost.mainImage && urlFor(currentPost.mainImage).width(1080).url();

  const relatedPosts = await client.fetch(RELATED_POSTS_QUERY, {
    categoryTitle: currentPost.category,
    secondLevelCategory: currentPost.secondLevelCategory,
  });

  const nextPost = await client.fetch(NEXT_POSTS_QUERY, {
    publishedAt: currentPost.publishedAt,
  });
  const prevPost = await client.fetch(PREV_POSTS_QUERY, {
    publishedAt: currentPost.publishedAt,
  });

  return (
    <>
      <Suspense fallback={<PostPageLoading />}>
        <article className="c mx-auto my-8">
          <PostTitle
            date={currentPost.publishedAt}
            title={currentPost.title}
            topic={currentPost.category}
          />
          <section className="flex flex-col-reverse xl:flex-row justify-center article">
            <div className="max-w-2xl border-gray-200 xl:border-r-2 xl:px-8">
              {mainImageUrl && <ImageEnlarger src={mainImageUrl} alt="img" />}
              <CustomPortableText value={currentPost.body} />
              <div className="mt-4">
                {relatedPosts && relatedPosts.length > 1 && (
                  <div className="mt-16">
                    <RelatedPosts
                      relatedPosts={relatedPosts}
                      currentPostId={currentPost._id}
                    />
                  </div>
                )}
              </div>
            </div>
            <aside className="block border-2 p-4 mb-8 rounded-md xl:sticky xl:top-20 xl:mb-0 xl:border-0 xl:pr-4 xl:pl-8 xl:self-start xl:max-h-[80vh] xl:overflow-y-scroll">
              <TableOfContents source={currentPost.body} />
            </aside>
          </section>
        </article>

        <PostNavigation nextPost={nextPost} prevPost={prevPost} />
      </Suspense>
    </>
  );
};

export default PostPage;
