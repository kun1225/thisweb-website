// Components
import CategoryDropdown from './_components/CategoryDropdown';

// Sanity Libs
import { client } from '@/lib/sanity/client';
import { CATEGORIES_QUERY } from '@/lib/sanity/queries';

// Type
import { categoriesType } from '@/lib/sanity/type';

interface PostsLayoutPropsType {
  children: React.ReactNode;
}

const PostsLayout: React.FC<PostsLayoutPropsType> = async ({ children }) => {
  const categories = await client.fetch<categoriesType>(CATEGORIES_QUERY);

  return (
    <div className="my-16">
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-baseline pb-2 border-b-2 border-gray-200">
        <h2 className="text-3xl">文章列表</h2>
        <CategoryDropdown categories={categories}/>
      </div>
      {children}
    </div>
  );
};

export default PostsLayout;
