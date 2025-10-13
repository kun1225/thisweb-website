import { Fira_Code, Noto_Sans_TC } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { cn } from '@/src/shared/lib/utils';
import { RootLayout, generateLayoutMetadata, getLayoutData } from '@/src/layout';
import { Providers } from '../providers';
import '../styles/globals.css';

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
  const data = await getLayoutData();

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
        <link rel="alternate" hrefLang="zh-TW" href="https://thisweb.dev/" />
        <link rel="alternate" hrefLang="x-default" href="https://thisweb.dev/" />
      </head>
      <body className="selection:bg-blue-1 min-h-full bg-gray-50 font-sans font-normal tracking-wide text-slate-800 selection:text-white">
        <Providers>
          <RootLayout data={data}>{children}</RootLayout>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
    </html>
  );
}
