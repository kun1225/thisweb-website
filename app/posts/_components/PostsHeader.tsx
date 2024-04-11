'use client';

// Hooks
import { useParams } from 'next/navigation';

// Components
import CategoryDropdown from './CategoryDropdown';

// Types
import { CategoriesType } from '@/lib/sanity/type';

interface PostsHeaderPropsType {
  categories: CategoriesType;
}

const PostsHeader: React.FC<PostsHeaderPropsType> = ({ categories }) => {
  const params = useParams();
  const categoryTitle = params?.category || '';
  const postsListTitle = (() => {
    if (Array.isArray(categoryTitle)) return categoryTitle[0] || '全部文章';
    return categoryTitle || '全部文章';
  })();

  return (
    <div className="flex flex-col gap-4 sm:flex-row justify-between items-baseline pb-4 mb-8 border-b-2 border-gray-200">
      <h2 className="text-3xl font-bold">{decodeURIComponent(postsListTitle)}</h2>
      <CategoryDropdown categories={categories} />
    </div>
  );
};

export default PostsHeader;
