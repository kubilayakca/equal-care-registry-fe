'use client';

import type { Metadata, Viewport } from 'next';
import { Gabarito } from 'next/font/google';
import useBreakpoint from '@/utils/hooks/use-breakpoints';
import Image from 'next/image';

import './globals.css';

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
});

export const metadata: Metadata = {
  title: 'EQUAL CARE',
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
        <main className='min-h-screen flex flex-col'>
          <div className='eq-container flex flex-col min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100svh-5.5rem)]'>
            <div className='flex-1  px-4 md:px-5 lg:px-10 grid grid-rows-[max-content,_1fr] lg:grid-rows-none lg:flex lg:flex-row gap-10 h-full py-10'>
              <div className='flex flex-col flex-1 basis-2/5'>
                <div className='flex-1 flex flex-col justify-center items-start pt-10 lg:pt-0'>
                  <h1 className='heading-01 text-green-500 pb-10'>404</h1>
                  <div className='heading-03 text-blue-2 font-lora mb-4'>
                    Something Went Wrong
                  </div>
                  <div className='body-m-400 text-blue-2 mb-[3.75rem]'>
                    A problem occurred while processing your request. Please
                    refresh the page or try again later. We are working to
                    resolve the issue as soon as possible, and we appreciate
                    your understanding.
                  </div>
                </div>
                <div className='hidden lg:flex'>
                  <Copy />
                </div>
              </div>
              <div className='grow basis-3/5 rounded-xl bg-brown-3 flex items-center justify-center relative overflow-hidden'>
                <Image
                  fill
                  src='/sketch.jpg'
                  alt='EQUAL CARE Sketch'
                  className='object-cover'
                />
              </div>
              <div className='flex lg:hidden'>
                <Copy />
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

const Copy = () => {
  return (
    <div className='body-s-400 text-blue-2'>
      {`©${new Date().getFullYear()} EQUAL CARE AG`}
    </div>
  );
};
