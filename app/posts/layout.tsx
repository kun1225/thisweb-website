// Components
import CategoryDropdown from './_components/CategoryDropdown';
import PostsHeader from './_components/PostsHeader';

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
      <PostsHeader categories={categories}/>
      {children}
    </div>
  );
};

export default PostsLayout;
