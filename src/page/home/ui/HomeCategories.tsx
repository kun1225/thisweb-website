'use client';

import Link from 'next/link';
import type { TypeHome } from '@/src/types/typeHome';
import { type TypeMouseState, useMouse } from '@/src/shared/hooks/useMouse';
import { Button } from '@/src/shared/ui/Button';
import { HomeHeading, HomeSubheading } from './HomeHeading';
import { motion } from 'motion/react';

export function HomeCategories({ data }: { data: TypeHome['categoriesNav'] }) {
  const { heading, headingId, subheading, categories } = data;

  const [mousePosition, ref] = useMouse();

  return (
    <section
      className="c group px-edge-dynamic relative overflow-x-hidden py-32 text-center"
      ref={ref}
    >
      <HomeCategoriesBg mousePosition={mousePosition} />

      <HomeSubheading subheading={subheading} />
      <HomeHeading heading={heading} headingId={headingId} />

      <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {categories.map((category) => (
          <HomeCategory key={category._key} category={category} />
        ))}
      </ul>

      <Button asChild variant="link">
        <Link
          href="/posts/page/0"
          aria-label="閱讀全部文章"
          title="閱讀全部文章"
          className="text-black-light mt-16"
        >
          或是，閱讀全部文章
        </Link>
      </Button>
    </section>
  );
}

function HomeCategoriesBg({ mousePosition }: { mousePosition: TypeMouseState }) {
  const { elementX: x, elementY: y } = mousePosition;

  return (
    <motion.div
      className="absolute -top-48 -left-48 -z-10 size-96 rounded-full bg-sky-50 opacity-0 blur-xl transition ease-linear group-hover:opacity-100"
      style={{ x, y }}
    />
  );
}

function HomeCategory({ category }: { category: TypeHome['categoriesNav']['categories'][0] }) {
  const [mousePosition, ref] = useMouse();

  const { elementX: x, elementY: y } = mousePosition;

  return (
    <li className="group/category-card relative">
      <article
        ref={ref}
        className="bg-white-pure/90 md:p-edge border-blue-5 relative z-10 h-full rounded-lg p-10 transition group-hover/category-card:-translate-y-2"
      >
        <h3 className="mb-4 text-2xl font-bold">{category.title || category.defaultTitle}</h3>
        <p className="text-pretty">{category.paragraph}</p>

        <Link
          className="absolute inset-0"
          href={`/posts/${category.url}/0`}
          title={`前往${category.title}分類頁面`}
          aria-label={`前往${category.title}分類頁面`}
        />
      </article>

      <div
        className="pointer-events-none absolute -inset-0.5 -z-10 rounded-lg opacity-0 transition group-hover/category-card:-translate-y-2 group-hover/category-card:opacity-100"
        style={{
          background: `
          radial-gradient(
            160px circle at ${x}px ${y}px,
            rgb(50, 147, 200),
            transparent 100%
            )
            `,
        }}
      />
    </li>
  );
}
