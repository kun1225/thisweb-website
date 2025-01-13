// Components
import { PostArticle } from './PostArticle';
import { PostSidebar } from './PostSidebar';
import { PostFooter } from './PostFooter';
// Types
import { TypePost } from '@/src/types/typePosts';

export function PostBody({
  currentPost,
  relatedPosts,
}: {
  currentPost: TypePost;
  relatedPosts?: TypePost[];
}) {
  return (
    <>
      <section className="p-post__body">
        <PostArticle currentPost={currentPost} />
        <PostSidebar data={currentPost} />
      </section>
      <PostFooter data={currentPost} relatedPosts={relatedPosts} />
    </>
  );
}
