// Components
import { PostsHeader } from './PostsHeader';

export function LayoutPosts({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-posts c 2xl:px-0">
      <PostsHeader />
      {children}
    </div>
  );
}
