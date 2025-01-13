import { hasArrayValue } from '@/src/shared/lib/utils';
import { PostRecommendations } from './PostRecommendations';
import { PostRelated } from './PostRelated';
import type { TypePost } from '@/src/types/typePosts';

export function PostFooter({ data, relatedPosts }: { data: TypePost; relatedPosts?: TypePost[] }) {
  return (
    <div className="p-post__footer">
      {hasArrayValue(relatedPosts) ? <PostRelated relatedPosts={relatedPosts!} /> : null}
      <PostRecommendations data={data} className="p-post__footer__recommendations" />
    </div>
  );
}
