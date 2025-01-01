// Components
import PostArticle from './PostArticle';
import PostSidebar from './PostSidebar';
// Types
import { PostType } from '@/src/libs/sanity/type';

export default function PostBody({
  currentPost,
  relatedPosts,
}: {
  currentPost: PostType;
  relatedPosts: PostType[];
}) {
  return (
    <section className="p-post__body">
      <PostArticle currentPost={currentPost} relatedPosts={relatedPosts} />
      <PostSidebar source={currentPost.body} />
    </section>
  );
}
