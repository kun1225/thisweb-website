import { PostHeader } from './PostHeader';
import { PostBody } from './PostBody';
import type { TypePost } from '@/src/types/typePosts';

export function PagePost({ data }: { data: TypePost }) {
  return (
    <article className="c pb-32 pt-4" id="p-post">
      <PostHeader data={data} />
      <PostBody data={data} />
    </article>
  );
}
