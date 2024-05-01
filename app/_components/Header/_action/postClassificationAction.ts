'use server';
// Sanity
import { CATEGORIES_WITH_SECOND_LEVEL_CATEGORIES_QUERY } from '@/lib/sanity/queries';
import { client } from '@/lib/sanity/client';

// Type
import { CategoriesType } from '@/lib/sanity/type';

const postClassificationAction = async () => {
  const categories = await client.fetch<CategoriesType>(
    CATEGORIES_WITH_SECOND_LEVEL_CATEGORIES_QUERY,
  );

  return categories
    .sort((a, b) => {
      if (a.priority && b.priority) return a.priority - b.priority;
      if (!a.priority && b.priority) return 1;
      if (a.priority && !b.priority) return -1;
      return 0;
    })
    .map((category) => {
      if (!category.secondLevelCategory) return category;
      return {
        ...category,
        secondLevelCategory: category.secondLevelCategory.sort((a, b) => {
          if (a.priority && b.priority) return a.priority - b.priority;
          if (!a.priority && b.priority) return 1;
          if (a.priority && !b.priority) return -1;
          return 0;
        }),
      };
    });
};

export default postClassificationAction;
