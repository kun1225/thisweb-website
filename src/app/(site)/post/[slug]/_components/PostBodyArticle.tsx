// Components
import Img from '@/src/app/_components/Img';
import PostRelated from './PostRelated';
import CustomPortableText from '@/src/app/_components/CustomPortableText';
// Types
import { PostType } from '@/src/libs/sanity/type';
import { TypeImage } from '@/src/libs/sanity/type/typeImage';

export default function PostBodyArticle({
  mainImage,
  currentPost,
  relatedPosts,
}: {
  mainImage: TypeImage;
  currentPost: PostType;
  relatedPosts: PostType[];
  className?: React.HTMLAttributes<HTMLElement>['className'];
}) {
  return (
    <div className="p-post__body__article">
      {mainImage ? <Img image={mainImage} /> : null}
      <CustomPortableText value={currentPost.body} />

      {relatedPosts && relatedPosts.length > 1 ? (
        <PostRelated
          relatedPosts={relatedPosts}
          currentPostId={currentPost._id}
        />
      ) : null}
    </div>
  );
}
