import { imgBuilder } from './sanity/client';
import getRoute from './getRoute';

export default function defineMetadata({ data }: { data: any }) {
  const { site, page } = data || {};
  const { _type, slug } = page || {};
  const siteTitle = site?.title || '';
  const metaDesc = page?.sharing?.metaDesc || site?.description || '';
  const metaTitle =
    page?.isHomepage === true
      ? page?.sharing?.metaTitle || siteTitle
      : `${
          page?.sharing?.metaTitle || page?.title || 'Page not found'
        } | ${siteTitle}`;

  const siteFavicon = site?.favicon || false;
  const siteFaviconUrl = siteFavicon
    ? imgBuilder.image(siteFavicon).width(256).height(256).url()
    : '/favicon.ico';
  const siteFaviconLight = site?.faviconLight || false;
  const siteFaviconLightUrl = siteFaviconLight
    ? imgBuilder.image(siteFaviconLight).width(256).height(256).url()
    : siteFaviconUrl;

  const shareGraphic =
    page?.sharing?.shareGraphic?.asset ||
    page?.thumbnail?.asset ||
    site?.shareGraphic?.asset ||
    '';
  const shareGraphicUrl = shareGraphic
    ? imgBuilder.image(shareGraphic).url()
    : false;

  return {
    title: metaTitle,
    description: metaDesc,
    creator: siteTitle,
    publisher: siteTitle,
    applicationName: siteTitle,
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      images: [shareGraphicUrl],
      url: process.env.SITE_URL,
      siteName: siteTitle,
      locale: 'en_US',
      type: 'website',
    },
    icons: {
      icon: [
        {
          url: siteFaviconUrl,
          media: '(prefers-color-scheme: light)',
        },
        {
          url: siteFaviconLightUrl,
          media: '(prefers-color-scheme: dark)',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDesc,
      creator: siteTitle,
      images: [shareGraphicUrl],
    },
    metadataBase: new URL(process.env.SITE_URL!),
    alternates: {
      canonical: `${process.env.SITE_URL}${getRoute({
        documentType: _type,
        slug,
      })}`,
      languages: {
        'en-US': '/en-US',
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };
}
