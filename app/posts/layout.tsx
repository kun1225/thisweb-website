// Components
import PostsHeader from './_components/PostsHeader';
// Sanity Libs
import { client } from '@/lib/sanity/client';
import { CATEGORIES_QUERY } from '@/lib/sanity/queries';
// Type
import { CategoriesType } from '@/lib/sanity/type';

// Config Segment
export const revalidate = 0;

const PostsLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const categories = await client.fetch<CategoriesType>(CATEGORIES_QUERY);
  const orderedCategories = categories.sort((a, b) => {
    if (a.priority && b.priority) return a.priority - b.priority;
    if (!a.priority && b.priority) return 1;
    if (a.priority && !b.priority) return -1;
    return 0;
  });

  return (
    <div className="c my-16 min-h-[80vh]">
      <PostsHeader categories={orderedCategories} />
      {children}
    </div>
  );
};

export default PostsLayout;
