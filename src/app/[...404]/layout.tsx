import type { Metadata, Viewport } from 'next';

import '../globals.css';

import { Gabarito } from 'next/font/google';

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
});

export const metadata: Metadata = {
  title: 'EQUALCARE',
  description: '',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ''),
  openGraph: {
    images: ['/equalcare-rich-link-preview.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale}
      className={`${gabarito.variable} ${gabarito.className}`}
      suppressHydrationWarning
    >
      <head>
        <link rel='icon' href='/favicon.png' sizes='64x64' />
        <link rel='icon' href='/icon.png' type='image/png' sizes='64x64' />
        <link
          rel='apple-touch-icon'
          href='/apple-icon.png'
          type='image/png'
          sizes='64x64'
        />
      </head>
      <body>
        <main className='min-h-screen flex flex-col'>{children}</main>
      </body>
    </html>
  );
}
