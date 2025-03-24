import type { TypePost } from '@/src/types/typePosts';
import { PostRecommendations } from './PostRecommendations';

export function PostFooter({ data }: { data: TypePost }) {
  return (
    <div className="">
      <PostRecommendations data={data} className="p-post__footer__recommendations" />
    </div>
  );
}
