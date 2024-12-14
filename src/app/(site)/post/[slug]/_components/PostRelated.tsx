import CustomLink from '@/src/app/_components/CustomLink';

import { PostType } from '@/src/libs/sanity/type';

export default function PostRelated({
  relatedPosts,
  currentPostId,
}: {
  relatedPosts: Pick<PostType, '_id' | 'title' | 'slug'>[];
  currentPostId: string;
}) {
  return (
    relatedPosts.length > 0 && (
      <section className="p-post__related">
        <h2>相關系列文章</h2>
        <div className="flex flex-col items-start gap-3">
          {relatedPosts.slice(0, 3).map((post) => {
            if (post._id === currentPostId)
              return (
                <p className="not-prose" key={post._id}>
                  👉 {post.title}
                </p>
              );
            return (
              <CustomLink key={post._id} href={`/post/${post.slug.current}`}>
                {post.title}
              </CustomLink>
            );
          })}
        </div>
      </section>
    )
  );
}
