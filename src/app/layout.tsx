// Next
import type { Metadata } from 'next';
// Libs
import { cn } from '@/src/libs/utils';
import { headerFetch } from '../libs/sanity/fetch';
// Vercel
import { SpeedInsights } from '@vercel/speed-insights/next';
// Components
import SiteLayout from './_layout/SiteLayout';
// Style
import '../styles/globals.scss';
// Fonts
import localFont from 'next/font/local';
import { Noto_Sans_TC } from 'next/font/google';

const NotoSansTC = Noto_Sans_TC({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-NotoSansTC',
});

const FiraCode = localFont({
  src: [
    {
      path: './../../public/fonts/FiraCode-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/FiraCode-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../public/fonts/FiraCode-SemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-FiraCode',
});

// Metadata
// TODO : Create generate open graph image file
export const metadata: Metadata = {
  metadataBase: new URL('https://thisweb.dev'),
  title: 'ThisWeb 請網這邊走 - 幫助你自學前端 ',
  description:
    '提供完整的前端入門教學，從 HTML、CSS、JS 核心觀念開始，進階到網頁動畫、前端框架以及前端工程師自我成長、目標管理等內容，讓你快速上手網頁程式，奠定基礎知識，轉職升職更順利。',
  creator: 'ThisWeb 請網這邊走',
  publisher: 'ThisWeb 請網這邊走',
  keywords: [
    '工程師自我成長',
    '工程師職涯競爭力',
    '前端最新資訊',
    'JavaScript 教學',
    'CSS 教學',
    'HTML教學',
    '前端教學',
    '前端目標管理',
  ],
  openGraph: {
    type: 'website',
    title: 'ThisWeb 請網這邊走 - 幫助你自學前端 ',
    description:
      '提供完整的前端入門教學，從 HTML、CSS、JS 核心觀念開始，進階到網頁動畫、前端框架以及前端工程師自我成長、目標管理等內容，讓你快速上手網頁程式，奠定基礎知識，轉職升職更順利。',
    locale: 'zh-TW',
    siteName: 'ThisWeb 請網這邊走',
    images: '/siteOwner.jpg',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerContent = await headerFetch();

  return (
    <html lang="zh-TW">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </head>
      <body className={`${cn(NotoSansTC.variable, FiraCode.variable)}`}>
        <SiteLayout headerContent={headerContent}>{children}</SiteLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
