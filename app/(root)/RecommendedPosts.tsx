// Components
import Link from 'next/link';
import Button from '../_components/Button';
import PostCard from './_components/PostCard';

// Utils
import {toPlainText} from '@portabletext/react';

// Types
import { PostsType } from '@/lib/sanity/type';

interface RecommendedPostsProps {
  limitedPosts: PostsType
}

const RecommendedPosts: React.FC<RecommendedPostsProps> = ({ limitedPosts }) => {

  return (
    <section className="c flex flex-col gap-8 items-center mb-32">
      <h2 className="text-2xl text-center drop-shadow-md">推薦文章</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
        {limitedPosts.map(({ title, body, slug, _id }) => (
          <PostCard desc={toPlainText(body)} key={_id} title={title} url={slug.current} />
        ))}
      </div>
      <Link href="/posts/page/0">
        <Button className="w-40" buttonType='outline'>觀看更多文章</Button>
      </Link>
    </section>
  );
}

export default RecommendedPosts;
