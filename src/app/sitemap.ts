import { MetadataRoute } from 'next';
import { getCategories } from '@/src/shared/api';
import { POSTS_PER_PAGE, getPostsCounts, getPostsSitemapData } from '../page/posts';
import { getProductAllUrl } from '../page/product/api/apiPageProduct';

const PRIORITY_TABLE = {
  home: 1,
  post: 0.9,
  product: 0.8,
  posts: 0.7,
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const NOW = new Date();
  const SITE_URL = process.env.SITE_URL || 'https://www.thisweb.dev';

  // *** Home Page ***
  const homePageSitemap: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: PRIORITY_TABLE.home,
    },
  ];

  const allSitemapData = await Promise.all([
    getCategories(),
    getPostsCounts(),
    getPostsSitemapData(),
    getProductAllUrl(),
  ]);

  // *** Categories Page ***
  const categories = allSitemapData[0];
  const categoryPagesCounts = categories.map((category) => ({
    ...category,
    pageCount: Math.ceil((category?.postCount ?? 0) / POSTS_PER_PAGE),
  }));

  const categoriesPageSitemap: MetadataRoute.Sitemap = categoryPagesCounts.flatMap((category, i) =>
    Array.from({ length: category.pageCount || 1 }, (_, j) => ({
      url: `${SITE_URL}/posts/${category.title}/${j}`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: PRIORITY_TABLE.posts,
    }))
  );

  // *** Post List Page ***
  const postsNumber = allSitemapData[1];
  const totalPageNumber = Math.ceil(postsNumber / POSTS_PER_PAGE);
  const postsPageSitemap: MetadataRoute.Sitemap = Array.from(
    { length: totalPageNumber },
    (_, i) => ({
      url: `${SITE_URL}/posts/page/${i}`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  );

  // *** Post Page ***
  const posts = allSitemapData[2];
  const postSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/post/${post.slug.current}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: PRIORITY_TABLE.post,
  }));

  // *** Product Page ***
  const productsUrl = allSitemapData[3];
  const productsSitemap: MetadataRoute.Sitemap = productsUrl.map((url: string) => ({
    url: `${SITE_URL}/product/${url}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: PRIORITY_TABLE.product,
  }));

  return [
    ...homePageSitemap,
    ...postSitemap,
    ...postsPageSitemap,
    ...categoriesPageSitemap,
    ...productsSitemap,
  ];
}
