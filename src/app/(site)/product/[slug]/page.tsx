import { notFound } from 'next/navigation';
import { imgBuilder } from '@/src/shared/lib/sanity';
import { hasArrayValue } from '@/src/shared/lib/utils';
import PageProduct from '@/src/page/product';
import {
  getProductAllUrl,
  getProductData,
  getProductSharing,
} from '@/src/page/product/api/apiPageProduct';

export async function generateStaticParams() {
  const slugs = await getProductAllUrl();
  const params = slugs.map((slug) => ({ slug }));
  return params;
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
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

export default async function page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { modules, announcement } = (await getProductData({ slug: params.slug })) || {};

  if (!hasArrayValue(modules)) {
    return notFound();
  }

  return <PageProduct modules={modules} announcement={announcement} />;
}
