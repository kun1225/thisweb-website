import { type TypePost } from '@/src/types/typePosts';
import { hasArrayValue } from '@/src/shared/lib/utils';
import { CustomPortableText } from '@/src/shared/ui/CustomPortableText';
import { PostRelated } from './PostRelated';

export function PostArticle({ data }: { data: TypePost }) {
  return (
    <section
      className="prose 3xl:prose-lg w-full max-w-3xl opacity-0 xl:shrink-0"
      style={{ animation: 'fade-in 0.6s 1s linear forwards' }}
    >
      <CustomPortableText value={data.body} />

      {hasArrayValue(data?.relatedPosts) ? (
        <PostRelated relatedPosts={data?.relatedPosts!} />
      ) : null}
    </section>
  );
}
