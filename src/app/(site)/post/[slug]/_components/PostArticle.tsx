// Components
import PostRelated from './PostRelated';
import CustomPortableText from '@/src/shared/ui/CustomPortableText';
// Types
import { TypePost } from '@/src/types/typePosts';

export default function PostArticle({
  currentPost,
  relatedPosts,
}: {
  currentPost: TypePost;
  relatedPosts: TypePost[];
}) {
  return (
    <div className="p-post__article">
      <CustomPortableText value={currentPost.body} />

      {relatedPosts && relatedPosts.length > 1 ? (
        <PostRelated relatedPosts={relatedPosts} currentPostId={currentPost._id} />
      ) : null}
    </div>
  );
}
