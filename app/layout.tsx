// Next
import type { Metadata } from 'next';

// Style
import '../style/globals.min.css';

// Components
import Header from './_components/Header/Header';
import Footer from './_components/Footer';
import ProgressBar from './_components/ProgressBar';
import { Suspense } from 'react';

// Vercel
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Utils
import { cn } from '@/lib/utils';

// Fonts
import { Noto_Sans_TC } from 'next/font/google';

const notoSans = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700', '800'],
});

// Metadata
// TODO : Create generate open graph image file
export const metadata: Metadata = {
  metadataBase: new URL('https://thisweb.dev'),
  title: 'ThisWeb 請網這邊走 - 幫助你自學前端 ',
  description:
    '提供完整的前端入門教學，從 HTML、CSS、JS 核心觀念開始，進階到網頁動畫、前端框架以及前端工程師自我成長、目標管理等內容，讓你快速上手網頁程式，奠定基礎知識，轉職升職更順利。',
  creator: 'ThisWeb 請網這邊走',
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
    images: '/siteOwner.jpg'
  },
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body className={`${cn(notoSans.className)}`}>
        <Suspense>
          <ProgressBar />
        </Suspense>
        <Header />
        <main className="c">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
