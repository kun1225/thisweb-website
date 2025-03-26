// Components
import { PostsHeader } from './PostsHeader';

export function LayoutPosts({ children }: { children: React.ReactNode }) {
  return (
    <div className="c mx-auto max-w-3xl">
      <PostsHeader />
      {children}
    </div>
  );
}
