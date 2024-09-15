'use client';
// Hooks
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

// Sanity
import { client } from '@/src/libs/sanity/client';
import {
  CATEGORIES_TITLE_BY_URL_QUERY,
  SECOND_LEVEL_CATEGORIES_TITLE_BY_URL_QUERY,
} from '@/src/libs/sanity/queries';
// Components
// import CategoryDropdown from './CategoryDropdown';

const PostsHeader: React.FC = () => {
  const params = useParams();

  const categoryUrl = params?.category || '';

  const [postListTitle, setPostListTitle] = useState<string>('');

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        if (!categoryUrl) {
          setPostListTitle('文章列表');
          return;
        }

        const { title } =
          (await client.fetch<{ title: string }>(
            CATEGORIES_TITLE_BY_URL_QUERY,
            {
              url: categoryUrl,
            },
          )) ||
          (await client.fetch<{ title: string }>(
            SECOND_LEVEL_CATEGORIES_TITLE_BY_URL_QUERY,
            {
              url: categoryUrl,
            },
          ));

        setPostListTitle(title || '文章列表');
      } catch (error) {
        console.error('Error fetching category title:', error);
        setPostListTitle('文章列表');
      }
    };

    fetchTitle();
  }, [categoryUrl]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row justify-between items-baseline pb-4 mb-8 border-b-2 border-gray-200">
      <h2 className="text-3xl font-bold">✏️ {postListTitle}</h2>
      {/* <CategoryDropdown categories={categories} /> */}
    </div>
  );
};

export default PostsHeader;
