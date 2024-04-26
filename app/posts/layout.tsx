// Components
import PostsHeader from './_components/PostsHeader';

// Sanity Libs
import { client } from '@/lib/sanity/client';
import { CATEGORIES_QUERY } from '@/lib/sanity/queries';

// Type
import { CategoriesType } from '@/lib/sanity/type';

interface PostsLayoutPropsType {
  children: React.ReactNode;
}

const PostsLayout: React.FC<PostsLayoutPropsType> = async ({ children }) => {
  const categories = await client.fetch<CategoriesType>(CATEGORIES_QUERY);
  const orderedCategories = categories.sort((a, b) => {
    if (a.orderNumber && b.orderNumber) return a.orderNumber - b.orderNumber;
    if (!a.orderNumber && b.orderNumber) return 1;
    if (a.orderNumber && !b.orderNumber) return -1;
    return 0;
  });

  return (
    <div className="my-16">
      <PostsHeader categories={orderedCategories} />
      {children}
    </div>
  );
};

export default PostsLayout;
