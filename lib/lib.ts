import { Articles } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const compose1 = (...fns: Array<(x:any)=>any>) => (x: any) => fns.reduceRight((v, f) => f(v), x);

type Func<T, U> = (arg: T) => U;

export function compose<T>(...functions: Array<Func<T, T>>): Func<T, T> {
  return (input: T): T => {
    return functions.reduceRight((result, func) => func(result), input);
  };
}

export function composeWithInitialValue<T>(
  initialValue: T,
  ...functions: Array<Func<T, T>>
): T {
  return functions.reduceRight((result, func) => func(result), initialValue);
}

export const sortArticleByDate = (allArticles: Articles[]) => {
  return allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

export const filterActiveArticles = (allArticles: Articles[]) => {
  return allArticles.filter((article) => article.isActive === true)
}

export const filteArticlesByTopic = (allArticles: Articles[], topic: string) => {
  return allArticles.filter((article) => article.topic === topic)
}