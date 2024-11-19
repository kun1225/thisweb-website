import { hasArrayValue } from '@/src/libs/helpers';
import {
  getPProductAllUrl,
  getPProductSharing,
  getPProductData,
} from '@/src/libs/sanity/fetch/pProductFetch';
import ModuleProduct from '@/src/app/_modules/ModuleProduct';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getPProductAllUrl();
  const params = slugs.map((slug) => ({ slug }));
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { metaTitle, metaDesc } =
    (await getPProductSharing({
      slug: params.slug,
    })) || {};

  return {
    title: metaTitle ? `${metaTitle} | ThisWeb` : `ThisWeb`,
    description: metaDesc,
    // openGraph: {
    //   title: metaTitle,
    //   description: metaDesc,
    //   images: [shareGraphic],
    // },
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const { modules } = (await getPProductData({ slug: params.slug })) || {};
  if (!hasArrayValue(modules)) {
    return notFound();
  }

  return <ModuleProduct modules={modules} />;
}
