import Link from 'next/link';

// Types
import { PostType, SlugAndTitleType } from '@/lib/sanity/type';

interface PostNavigationProps {
  prevPost: SlugAndTitleType | undefined;
  nextPost: SlugAndTitleType | undefined;
}
const PostNavigation: React.FC<PostNavigationProps> = ({
  prevPost,
  nextPost,
}) => {
  return (
    <div className="flex flex-col gap-4 mt-24 md:flex-row md:justify-between xl:gap-8">
      {prevPost ? (
        <Link
          className="basis-1/2 hover:scale-[102%] transition"
          href={prevPost.slug.current}
        >
          <p className="mb-1 text-lg font-bold text-secondary transition-colors">
            上一篇
          </p>
          <div className="flex gap-2">
            <span className="hidden md:inline mr-2">←</span>
            <span className="text-sm">{prevPost.title}</span>
          </div>
        </Link>
      ) : (
        <div className="basis-1/2" />
      )}
      {nextPost ? (
        <Link
          className="basis-1/2 block text-right hover:scale-[102%] transition"
          href={nextPost.slug.current}
        >
          <p className="mb-1 text-lg font-bold text-secondary transition-colors ">
            下一篇
          </p>
          <div className="flex gap-2">
            <span className="text-sm">{nextPost.title}</span>
            <span className="hidden md:inline">→</span>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default PostNavigation;
