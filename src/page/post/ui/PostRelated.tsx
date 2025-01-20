import CustomLink from '@/src/shared/ui/CustomLink';

import type { TypeRelatedPost } from '@/src/types/typePosts';

export function PostRelated({ relatedPosts }: { relatedPosts: TypeRelatedPost[] }) {
  return (
    relatedPosts.length > 0 && (
      <section className="p-post__related">
        <h2 className="p-post__related__heading">你可能會感興趣的文章 👇</h2>
        <div className="flex flex-col items-start gap-3">
          {relatedPosts.map((post) => (
            <CustomLink key={post._key} href={`/post/${post.slug.current}`}>
              {post.title}
            </CustomLink>
          ))}
        </div>
      </section>
    )
  );
}
