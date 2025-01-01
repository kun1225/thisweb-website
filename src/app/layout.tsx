// Libs
import { cn } from '@/src/shared/lib/utils';
import { getHeaderData } from '../shared/api';
import { generateLayoutMetadata } from '../layout/lib/generateLayoutMetadata';
// Components
import { RootLayout } from '@/src/layout';
// Fonts
import { Noto_Sans_TC, Fira_Code } from 'next/font/google';
// Style
import './_styles/globals.scss';

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
    <html lang="zh-TW">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </head>
      <body className={`${cn(NotoSansTC.variable, FiraCode.variable)}`}>
        <RootLayout headerContent={headerContent}>{children}</RootLayout>
      </body>
    </html>
  );
}
