import { Fira_Code, Noto_Sans_TC } from 'next/font/google';
import { getHeaderData } from '@/src/shared/api';
import { cn } from '@/src/shared/lib/utils';
import { RootLayout, generateLayoutMetadata } from '@/src/layout';
// import './_styles/globals-scss.scss';
import './globals.css';

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
  return generateLayoutMetadata();
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const headerContent = await getHeaderData();

  return (
    <html
      lang="zh-TW"
      className={cn(
        'min-h-full scroll-p-[120px] scroll-smooth',
        NotoSansTC.variable,
        FiraCode.variable
      )}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </head>
      <body className="selection:bg-blue-1 min-h-full bg-gray-50 font-sans font-normal tracking-wide text-slate-800 selection:text-white">
        <RootLayout headerContent={headerContent}>{children}</RootLayout>
      </body>
    </html>
  );
}
