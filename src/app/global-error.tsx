'use client';

import type { Metadata, Viewport } from 'next';
import { Gabarito } from 'next/font/google';
import useBreakpoint from '@/utils/hooks/use-breakpoints';

import './globals.css';

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
    images: ['/yequalcare-rich-link-preview.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const breakpoint = useBreakpoint();

  return (
    <html lang='tr' className='' suppressHydrationWarning>
      <head></head>
      <body
        className={`${gabarito.variable} ${gabarito.className} text-base-100`}
      >
        <main className='min-h-screen flex flex-col'>TODO: 500</main>
      </body>
    </html>
  );
}
