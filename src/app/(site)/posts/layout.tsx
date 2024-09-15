// Components
import PostsHeader from './_components/PostsHeader';

// Route Segment Config
export const revalidate = 0;

const PostsLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <div className="c my-16 min-h-[80vh]">
      <PostsHeader />
      {children}
    </div>
  );
};

export default PostsLayout;
