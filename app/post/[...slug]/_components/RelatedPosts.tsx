import CustomLink from '@/app/_components/CustomLink';

import { PostType } from '@/lib/sanity/type';

interface RelatedPostsPropsType {
  relatedPosts: Pick<PostType, '_id' | 'title' | 'slug'>[];
  currentPostId: string;
}
const RelatedPosts: React.FC<RelatedPostsPropsType> = ({
  relatedPosts,
  currentPostId,
}) => {
  return (
    <>
      <p className="!mb-4 text-2xl text-primary font-bold">相關系列文章</p>
      <div className="flex flex-col gap-1 text-base">
        {relatedPosts.map((post) => {
          if (post._id === currentPostId)
            return (
              <p key={post._id} className="my-0.5">
                👉 {post.title}
              </p>
            );
          return (
            <CustomLink
              key={post._id}
              href={`/post/${post.slug.current}`}
              className="my-0.5"
            >
              {post.title}
            </CustomLink>
          );
        })}
      </div>
    </>
  );
};

export default RelatedPosts;
