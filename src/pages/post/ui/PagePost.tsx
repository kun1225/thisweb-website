import { PostHeader } from './PostHeader';
import { PostBody } from './PostBody';
import type { TypePost } from '@/src/types/typePosts';

export function PagePost({ currentPost }: { currentPost: TypePost }) {
  return (
    <article className="p-post" id="p-post">
      <PostHeader
        date={currentPost.publishedAt}
        title={currentPost.title}
        topic={currentPost.category}
      />
      <PostBody currentPost={currentPost} />
    </article>
  );
}
