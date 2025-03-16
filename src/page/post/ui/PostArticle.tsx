import { hasArrayValue } from '@/src/shared/lib/utils';
import { PostRelated } from './PostRelated';
import CustomPortableText from '@/src/shared/ui/CustomPortableText';

// Types
import { TypePost } from '@/src/types/typePosts';

export function PostArticle({ data }: { data: TypePost }) {
  return (
    <section
      className="prose w-full max-w-3xl opacity-0 3xl:prose-lg xl:shrink-0"
      style={{ animation: 'fade-in 0.6s 1s linear forwards;' }}
    >
      <CustomPortableText value={data.body} />

      {hasArrayValue(data?.relatedPosts) ? (
        <PostRelated relatedPosts={data?.relatedPosts!} />
      ) : null}
    </section>
  );
}
