import type { Articles } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const sortArticleByDate = (allArticles: Articles[]) => {
  return allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
};

export const filterActiveArticles = (allArticles: Articles[]) => {
  return allArticles.filter((article) => article.isActive);
};

export const filterArticlesByTopic = (
  allArticles: Articles[],
  topic: string,
) => {
  return allArticles.filter((article) => article.topic === topic);
};
