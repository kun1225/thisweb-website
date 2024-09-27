// Components
import Link from 'next/link';
import { Button } from '@/src/app/_components/Button';
// Utils
import { toPlainText } from '@portabletext/react';
// Types
import { PostsType, PostType } from '@/src/libs/sanity/type';

export default function HomeRecommendedPosts({
  limitedPosts,
}: {
  limitedPosts: PostsType;
}) {
  return (
    <section className="p-home__recommended-posts">
      <h2 className="p-home__recommended-posts__heading">推薦文章</h2>
      <div className="p-home__recommended-posts__posts">
        {limitedPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <Link href="/posts/page/0">
        <Button variant="outline" size="hero">
          觀看更多文章
        </Button>
      </Link>
    </section>
  );
}

function PostCard({ post }: { post: PostType }) {
  const { title, body, url } = post;
  const truncateDesc = toPlainText(body).split('').slice(0, 50).join('');

  return (
    <Link className="p-home__recommended-posts__post" href={`post/${url}`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{truncateDesc}...</p>
    </Link>
  );
}