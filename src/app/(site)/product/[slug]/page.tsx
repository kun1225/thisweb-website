import dynamic from 'next/dynamic';
import { imgBuilder } from '@/src/shared/lib/sanity';
import { hasArrayValue } from '@/src/shared/lib/utils';
import {
  getProductAllUrl,
  getProductSharing,
  getProductData,
} from '@/src/shared/api/apiPageProduct';
import ModuleProduct from '@/src/app/_modules/ModuleProduct';
import { notFound } from 'next/navigation';

const PageProductAnnouncement = dynamic(() => import('./_components/PageProductAnnouncement'), {
  ssr: false,
});

export async function generateStaticParams() {
  const slugs = await getProductAllUrl();
  const params = slugs.map((slug) => ({ slug }));
  return params;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const {
    sharing: { metaTitle, metaDesc, shareGraphic },
  } =
    (await getProductSharing({
      slug: params.slug,
    })) || {};

  const shareGraphicUrl = shareGraphic ? imgBuilder.image(shareGraphic).url() : false;

  return {
    title: metaTitle ? `${metaTitle} | ThisWeb` : `ThisWeb`,
    description: metaDesc,
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      images: [shareGraphicUrl],
      siteName: 'ThisWeb',
      locale: 'zh-hant',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDesc,
      creator: 'ThisWeb',
      images: [shareGraphicUrl],
    },
    metadataBase: 'https://thisweb.dev',
    alternates: {
      languages: {
        'zh-hant': '/',
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const { modules, announcement } = (await getProductData({ slug: params.slug })) || {};
  if (!hasArrayValue(modules)) {
    return notFound();
  }

  return (
    <>
      <PageProductAnnouncement data={announcement} />
      <ModuleProduct modules={modules} />
    </>
  );
}
