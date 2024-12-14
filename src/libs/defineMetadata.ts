import { imgBuilder } from './sanity/client';
import getRoute from './getRoute';

export default function defineMetadata(data: any) {
  const { siteTitle, siteDescription, shareGraphic } = data;
  // // const { site, page } = data || {};
  // // const { _type, slug } = page || {};
  // // const siteTitle = site?.title || '';
  // // const metaDesc = page?.sharing?.metaDesc || site?.description || '';
  // // const metaTitle =
  // //   page?.isHomepage === true
  // //     ? page?.sharing?.metaTitle || siteTitle
  // //     : `${
  // //         page?.sharing?.metaTitle || page?.title || 'Page not found'
  // //       } | ${siteTitle}`;

  // // const siteFavicon = site?.favicon || false;
  // // const siteFaviconUrl = siteFavicon
  //   ? imgBuilder.image(siteFavicon).width(256).height(256).url()
  //   : '/favicon.ico';
  // const siteFaviconLight = site?.faviconLight || false;
  // const siteFaviconLightUrl = siteFaviconLight
  //   ? imgBuilder.image(siteFaviconLight).width(256).height(256).url()
  //   : siteFaviconUrl;

  // const shareGraphic =
  //   page?.sharing?.shareGraphic?.asset ||
  //   page?.thumbnail?.asset ||
  //   site?.shareGraphic?.asset ||
  //   '';
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
