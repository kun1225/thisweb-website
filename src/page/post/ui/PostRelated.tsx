import type { TypeRelatedPost } from '@/src/types/typePosts';
import CustomLink from '@/src/shared/ui/CustomLink';

export function PostRelated({ relatedPosts }: { relatedPosts: TypeRelatedPost[] }) {
  return (
    relatedPosts.length > 0 && (
      <section className="rounded border border-gray-200 bg-gray-100 px-6 py-8 shadow">
        <h2 className="!mt-0">你可能會感興趣的文章 👇</h2>
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
