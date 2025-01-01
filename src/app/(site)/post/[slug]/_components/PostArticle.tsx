// Components
import PostRelated from './PostRelated';
import CustomPortableText from '@/src/shared/ui/CustomPortableText';
// Types
import { PostType } from '@/src/libs/sanity/type';

export default function PostArticle({
  currentPost,
  relatedPosts,
}: {
  currentPost: PostType;
  relatedPosts: PostType[];
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
