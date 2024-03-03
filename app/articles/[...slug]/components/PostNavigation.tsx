import Link from 'next/link';

// Types
import { PostType } from '@/lib/sanity/type';

interface PostNavigationProps {
  prevPost: PostType | undefined;
  nextPost: PostType | undefined;
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
          <h2 className="mb-1 text-lg tracking-wide text-secondary transition-colors">
            上一篇
          </h2>
          <span className="hidden md:inline">← </span>
          <span className="font-bold text-sm">{prevPost.title}</span>
        </Link>
      ) : (
        <div className="basis-1/2" />
      )}
      {nextPost ? (
        <Link
          className="basis-1/2 block md:text-right hover:scale-[102%] transition"
          href={nextPost.slug.current}
        >
          <h2 className="mb-1 text-left text-lg uppercase tracking-wide text-secondary transition-colors md:text-right">
            下一篇
          </h2>
          <span className="font-bold text-sm">{nextPost.title} </span>
          <span className="hidden md:inline">→</span>
        </Link>
      ) : null}
    </div>
  );
}

export default PostNavigation;
