// Next
import type { Metadata } from 'next';

// Style
import '../style/globals.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import { Suspense } from 'react';

// Metadata
// TODO : Create generate open graph image file
export const metadata: Metadata = {
  title: 'ThisWeb 請網這邊走 - 幫助你自學前端 ',
  description:
    '提供完整的前端入門教學，從 HTML、CSS、JS 核心觀念開始，進階到網頁動畫、前端框架以及前端工程師自我成長等內容，讓你快速上手網頁程式，奠定基礎知識，轉職升職更順利。',
  creator: 'ThisWeb 請網這邊走',
  keywords: ['工程師自我成長', '工程師職涯競爭力', '前端最新資訊', 'JavaScript 教學', 'CSS 教學', 'HTML教學', '前端教學' ],
  openGraph: {
    type: 'website',
    title: 'ThisWeb 請網這邊走 - 幫助你自學前端 ',
    description:
      '提供完整的前端入門教學，從 HTML、CSS、JS 核心觀念開始，進階到網頁動畫、前端框架以及前端工程師自我成長等內容，讓你快速上手網頁程式，奠定基礎知識，轉職升職更順利。',
    locale: 'zh-TW',
    siteName: 'ThisWeb 請網這邊走' ,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>
        <Suspense>
          <ProgressBar />
        </Suspense>
          <Header />
          <main className="px-4 md:px-8 lg:px-16 xl:px-20">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
