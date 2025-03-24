'use client';

//Types
import { TypePost } from '@/src/types/typePosts';
import { PostRecommendations } from './PostRecommendations';

export function PostSidebar({ data }: { data: TypePost }) {
  return (
    <aside
      className="xl:pl-edge-xs w-full max-w-3xl opacity-0 xl:sticky xl:top-[var(--top)] xl:mb-0 xl:max-w-xs xl:flex-1 xl:self-start"
      style={{ animation: 'fade-in 0.6s 1.2s linear forwards' }}
    >
      <PostRecommendations data={data} />
    </aside>
  );
}
