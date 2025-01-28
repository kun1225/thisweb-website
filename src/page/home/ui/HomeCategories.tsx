'use client';

import { motion } from 'framer-motion';
import { useMouse, type TypeMouseState } from '@/src/shared/hooks/useMouse';

import { HomeHeading, HomeSubheading } from './HomeHeading';
import Link from 'next/link';
import { Button } from '@/src/shared/ui/Button';

import type { TypeHome } from '@/src/types/typeHome';

export function HomeCategories({ data }: { data: TypeHome['categoriesNav'] }) {
  const { heading, headingId, subheading, categories } = data;

  const [mousePosition, ref] = useMouse();

  return (
    <section className="group relative px-edge-dynamic py-32 text-center" ref={ref}>
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
          href="/posts/0"
          aria-label="閱讀全部文章"
          title="閱讀全部文章"
          className="mt-16 text-black-light"
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
      className="absolute -left-48 -top-48 -z-10 size-96 rounded-full bg-sky-50 opacity-0 blur-xl transition ease-linear group-hover:opacity-100"
      style={{ x, y }}
    />
  );
}

function HomeCategory({ category }: { category: TypeHome['categoriesNav']['categories'][0] }) {
  const [mousePosition, ref] = useMouse();

  const { elementX: x, elementY: y } = mousePosition;

  return (
    <li className="group/cateogry-card relative">
      <article
        ref={ref}
        className="border-black-5 relative z-10 h-full rounded-lg border bg-white-pure/90 p-10 transition group-hover/cateogry-card:-translate-y-2 md:p-edge"
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
        className="pointer-events-none absolute -inset-0.5 -z-10 rounded-lg opacity-0 transition group-hover/cateogry-card:-translate-y-2 group-hover/cateogry-card:opacity-100"
        style={{
          background: `
          radial-gradient(
            160px circle at ${x}px ${y}px,
            rgb(var(--cr-blue-3)),
            transparent 100%
            )
            `,
        }}
      />
    </li>
  );
}
