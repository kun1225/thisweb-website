import CustomLink from '@/src/shared/ui/CustomLink';

import { PostType } from '@/src/libs/sanity/type';

export function PostRelated({
  relatedPosts,
}: {
  relatedPosts: Pick<PostType, '_id' | 'title' | 'slug'>[];
}) {
  return (
    relatedPosts.length > 0 && (
      <section className="p-post__related">
        <h2>相關系列文章</h2>
        <div className="flex flex-col items-start gap-3">
          {relatedPosts.slice(0, 3).map((post) => (
            <CustomLink key={post._id} href={`/post/${post.slug.current}`}>
              {post.title}
            </CustomLink>
          ))}
        </div>
      </section>
    )
  );
}
