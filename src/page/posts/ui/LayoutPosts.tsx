// Components
import { PostsHeader } from './PostsHeader';

export function LayoutPosts({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-posts">
      <PostsHeader />
      {children}
    </div>
  );
}
