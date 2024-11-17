// Components
import PostArticle from './PostArticle';
import PostSidebar from './PostSidebar';
// Types
import { PostType } from '@/src/libs/sanity/type';
import { TypeImage } from '@/src/types/typeImage';

export default function PostBody({
  mainImage,
  currentPost,
  relatedPosts,
}: {
  mainImage: TypeImage;
  currentPost: PostType;
  relatedPosts: PostType[];
}) {
  return (
    <section className="p-post__body">
      <PostArticle
        mainImage={mainImage}
        currentPost={currentPost}
        relatedPosts={relatedPosts}
      />
      <PostSidebar source={currentPost.body} />
    </section>
  );
}
