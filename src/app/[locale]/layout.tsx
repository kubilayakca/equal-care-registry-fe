import type { Metadata, ResolvingMetadata, Viewport } from 'next';
import { Gabarito } from 'next/font/google';

import '../globals.css';

import { HeaderWrapper } from '@/partials/header';
import { FooterWrapper } from '@/partials/footer';

import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { headers } from 'next/headers';

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
});

export async function generateMetadata(
  { params: { locale } }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get('pathname');

  const t = await getTranslations({ locale });

  const parentMeta = await parent;

  return {
    title: `${t('page_home_title')} - ${t('equalcare')}`,
    description: t('page_home_description'),
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ''),
    openGraph: {
      images: ['/equalcare-rich-link-preview.png'],
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
  modal,
  params: { locale },
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = useMessages();

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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className='min-h-screen flex flex-col'>
            <HeaderWrapper />
            {children}
            <FooterWrapper />
          </main>
          {modal}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
