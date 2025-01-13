import { getSettingsGeneral } from '../api/apiSettingsGeneral';
import { imgBuilder } from '@/src/shared/lib/sanity';

export async function generateLayoutMetadata() {
  const data: any = await getSettingsGeneral();

  const { siteTitle, siteDescription, shareGraphic } = data;

  const shareGraphicUrl = shareGraphic ? imgBuilder.image(shareGraphic).url() : false;

  return {
    title: siteTitle,
    description: siteDescription,
    creator: siteTitle,
    publisher: siteTitle,
    applicationName: siteTitle,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      images: [shareGraphicUrl],
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
