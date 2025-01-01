// Components
import PostArticle from './PostArticle';
import PostSidebar from './PostSidebar';
// Types
import { TypePost } from '@/src/types/typePosts';

export default function PostBody({
  currentPost,
  relatedPosts,
}: {
  currentPost: TypePost;
  relatedPosts: TypePost[];
}) {
  return (
    <section className="p-post__body">
      <PostArticle currentPost={currentPost} relatedPosts={relatedPosts} />
      <PostSidebar source={currentPost.body} />
    </section>
  );
}
