import { PostHeader } from './PostHeader';
import { PostBody } from './PostBody';
import type { TypePost } from '@/src/types/typePosts';

export function PagePost({ data }: { data: TypePost }) {
  return (
    <article className="p-post" id="p-post">
      <PostHeader data={data} />
      <PostBody data={data} />
    </article>
  );
}
