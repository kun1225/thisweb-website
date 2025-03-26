import type { Metadata } from 'next';
import { imgBuilder } from '@/src/shared/lib/sanity';
import { getSettingsGeneral } from '../api/apiSettingsGeneral';

export async function generateLayoutMetadata(): Promise<Metadata> {
  const data: any = await getSettingsGeneral();

  const { siteTitle, siteDescription, shareGraphic } = data;

  const shareGraphicUrl = shareGraphic ? imgBuilder.image(shareGraphic).url() : false;

  return {
    title: siteTitle,
    description: siteDescription,
    creator: siteTitle,
    publisher: siteTitle,
    applicationName: siteTitle,
    authors: {
      name: siteTitle,
      url: 'https://thisweb.dev',
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      images: shareGraphicUrl ? [shareGraphicUrl] : [],
      url: 'https://thisweb.dev',
      siteName: siteTitle,
      locale: 'zh-hant',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      creator: siteTitle,
      images: shareGraphicUrl ? [shareGraphicUrl] : [],
    },
    metadataBase: new URL('https://thisweb.dev'),
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
