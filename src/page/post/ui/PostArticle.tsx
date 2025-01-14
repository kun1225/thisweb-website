import { hasArrayValue } from '@/src/shared/lib/utils';
import { PostRelated } from './PostRelated';
import CustomPortableText from '@/src/shared/ui/CustomPortableText';
// Types
import { TypePost } from '@/src/types/typePosts';

export function PostArticle({ data }: { data: TypePost }) {
  return (
    <div className="p-post__article">
      <CustomPortableText value={data.body} />

      {hasArrayValue(data?.relatedPosts) ? (
        <PostRelated relatedPosts={data?.relatedPosts!} />
      ) : null}
    </div>
  );
}
