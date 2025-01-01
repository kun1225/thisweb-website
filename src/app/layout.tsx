// Libs
import { cn } from '@/src/shared/lib/utils';
import { getSettingsGeneral, getHeaderData } from '../shared/api';
import { imgBuilder } from '../shared/lib/sanity';

// Components
import SiteLayout from './_layout/SiteLayout';
// Style
import '../styles/globals.scss';
// Fonts
import { Noto_Sans_TC, Fira_Code } from 'next/font/google';

const NotoSansTC = Noto_Sans_TC({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-NotoSansTC',
});
const FiraCode = Fira_Code({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-FiraCode',
});

// Metadata
export async function generateMetadata() {
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerContent = await getHeaderData();

  return (
    <html lang="zh-TW">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </head>
      <body className={`${cn(NotoSansTC.variable, FiraCode.variable)}`}>
        <SiteLayout headerContent={headerContent}>{children}</SiteLayout>
      </body>
    </html>
  );
}
