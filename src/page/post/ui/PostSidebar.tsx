'use client';

import { PostRecommendations } from './PostRecommendations';
//Types
import { TypePost } from '@/src/types/typePosts';

export function PostSidebar({ data }: { data: TypePost }) {
  return (
    <aside className="p-post__sidebar">
      <PostRecommendations data={data} className="p-post__sidebar__recommendations" />
    </aside>
  );
}
