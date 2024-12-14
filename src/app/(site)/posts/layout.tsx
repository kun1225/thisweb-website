// Components
import PostsHeader from './_components/PostsHeader';

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-posts">
      <PostsHeader />
      {children}
    </div>
  );
}
