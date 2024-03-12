// style
import '../../../style/prism.css';
import '../../../style/article.css';

// Sanity
import { client } from '@/lib/sanity/client';
import {
  POSTS_SLUG_QUERY,
  POST_QUERY,
  NEXT_POSTS_QUERY,
  PREV_POSTS_QUERY,
} from '@/lib/sanity/queries';
import { toPlainText } from '@portabletext/react';

// Components
import PostTitle from './_components/PostTitle';
import PostNavigation from './_components/PostNavigation';
import TableOfContents from './_components/TableOfContents';
import CustomPortableText from '@/app/_components/CustomPortableText';

// Type
import { PostType } from '@/lib/sanity/type';

// Libs
import { notFound } from 'next/navigation';

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
  };
};

const PostPage = async ({ params }: { params: { slug: string[] } }) => {
  const currentPost = await client.fetch<PostType>(
    POST_QUERY,
    {
      slug: params.slug[0],
    },
    {
      next: {
        revalidate: 1800,
      },
    },
  );

  if (!currentPost) notFound();

  const nextPost = await client.fetch(NEXT_POSTS_QUERY, {
    publishedAt: currentPost.publishedAt,
  });
  const prevPost = await client.fetch(PREV_POSTS_QUERY, {
    publishedAt: currentPost.publishedAt,
  });

  return (
    <>
      <article className="mx-auto my-8">
        <PostTitle
          date={currentPost.publishedAt}
          title={currentPost.title}
          topic={currentPost.category}
        />
        <section className="flex flex-col-reverse xl:flex-row justify-center article">
          <div className="max-w-2xl border-gray-200 xl:border-r-2 xl:px-8">
            <CustomPortableText value={currentPost.body} />
          </div>
          <aside className="block mb-8 border-2 p-4 rounded-md xl:sticky xl:top-20 xl:mb-0 xl:border-0 xl:p-0 xl:pl-8 xl:self-start xl:max-h-[80vh] xl:overflow-y-scroll">
            <TableOfContents source={currentPost.body} />
          </aside>
        </section>
      </article>

      <PostNavigation nextPost={nextPost} prevPost={prevPost} />
    </>
  );
};

export default PostPage;
