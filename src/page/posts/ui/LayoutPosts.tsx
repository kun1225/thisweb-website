// Components
import { PostsHeader } from './PostsHeader';

export function LayoutPosts({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <PostsHeader />
      {children}
    </div>
  );
}
