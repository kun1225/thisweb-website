'use server';

import { CATEGORIES_WITH_SECOND_LEVEL_CATEGORIES_QUERY } from '@/lib/sanity/queries';
import { client } from '@/lib/sanity/client';
import { CategoriesType, CategoryType } from '@/lib/sanity/type';

const postClassificationAction = async (): Promise<CategoryType[]> => {
  const categories = await client.fetch<CategoriesType>(
    CATEGORIES_WITH_SECOND_LEVEL_CATEGORIES_QUERY,
  );

  return categories.sort(sortByPriority).map(sortCategoryWithSubcategories);
};

export default postClassificationAction;

function sortByPriority(a: CategoryType, b: CategoryType): number {
  if (a.priority && b.priority) return a.priority - b.priority;
  if (!a.priority && b.priority) return 1;
  if (a.priority && !b.priority) return -1;
  return 0;
}

function sortCategoryWithSubcategories(category: CategoryType): CategoryType {
  if (!category.secondLevelCategory) return category;
  return {
    ...category,
    secondLevelCategory: category.secondLevelCategory.sort(sortByPriority),
  };
}
