import { PostRecommendations } from './PostRecommendations';
import type { TypePost } from '@/src/types/typePosts';

export function PostFooter({ data }: { data: TypePost }) {
  return (
    <div className="p-post__footer">
      <PostRecommendations data={data} className="p-post__footer__recommendations" />
    </div>
  );
}
