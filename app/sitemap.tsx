import { MetadataRoute } from 'next';
import {
  CATEGORIES_QUERY,
  POSTS_QUERY,
  POSTS_NUMBER_QUERY,
  POSTS_COUNTS_BY_CATEGORY_TITLE_QUERY,
} from '@/lib/sanity/queries';
import { CategoriesType, PostsType } from '@/lib/sanity/type';
import { client } from '@/lib/sanity/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const PER_NUMBER_PAGE = 9;
  const NOW = new Date();

  const categories = await client.fetch<CategoriesType>(
    CATEGORIES_QUERY,
    {},
    {
      next: {
        revalidate: 0,
      },
    },
  );

  const categoryPagesCounts = await Promise.all(
    categories.map(async (category) => {
      const count = await client.fetch<number>(
        POSTS_COUNTS_BY_CATEGORY_TITLE_QUERY,
        { categoryTitle: category.title },
        {
          next: {
            revalidate: 0,
          },
        },
      );
      return Math.ceil(count / PER_NUMBER_PAGE);
    }),
  );

  const categoriesPageSitemap: MetadataRoute.Sitemap = categories.flatMap((category, i) =>
    Array.from({ length: categoryPagesCounts[i] || 1 }, (_, j) => ({
      url: `https://www.thisweb.dev/posts/${category.title}/${j}`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.6,
    }))
  );

  const postsNumber = await client.fetch<number>(
    POSTS_NUMBER_QUERY,
    {},
    {
      next: {
        revalidate: 0,
      },
    },
  );
  const totalPageNumber = Math.ceil(postsNumber / PER_NUMBER_PAGE);
  const postsPageSitemap: MetadataRoute.Sitemap = Array.from(
    { length: totalPageNumber },
    (_, i) => ({
      url: `https://www.thisweb.dev/posts/page/${i}`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.6,
    }),
  );

  const posts = await client.fetch<PostsType>(
    POSTS_QUERY,
    {},
    {
      next: {
        revalidate: 0,
      },
    },
  );
  const postSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://www.thisweb.dev/post/${post.slug.current}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 1,
  }));

  return [
    {
      url: 'https://www.thisweb.dev',
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...postSitemap,
    ...postsPageSitemap,
    ...categoriesPageSitemap,
  ];
}
