// Components
import PostBodyArticle from './PostBodyArticle';
import PostSidebar from './PostBodySidebar';
// Types
import { PostType } from '@/src/libs/sanity/type';
import { TypeImage } from '@/src/libs/sanity/type/typeImage';

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
      <PostBodyArticle
        mainImage={mainImage}
        currentPost={currentPost}
        relatedPosts={relatedPosts}
      />
      <PostSidebar source={currentPost.body} />
    </section>
  );
}
