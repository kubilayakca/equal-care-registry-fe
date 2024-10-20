'use client';

import { Button } from '@/components/button';
import { ROUTES } from '@/utils/constants';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const NotFoundPage = () => {
  const t = useTranslations();

  return (
    <div className='eq-container flex flex-col min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100svh-5.5rem)]'>
      <div className='flex-1  px-4 md:px-5 lg:px-10 grid grid-rows-[max-content,_1fr] lg:grid-rows-none lg:flex lg:flex-row gap-10 h-full py-10'>
        <div className='flex flex-col flex-1 basis-2/5'>
          <div className='flex-1 flex flex-col justify-center items-start pt-10 lg:pt-0'>
            <h1 className='heading-01 text-green-500 pb-10'>404</h1>
            <div className='heading-03 text-blue-2 font-lora mb-4'>
              {t('page_not_found')}
            </div>
            <div className='body-m-400 text-blue-2 mb-[3.75rem]'>
              {t('page_not_found_description')}
            </div>
            <Button
              variant='green'
              icon='arrow-up-right'
              className='uppercase'
              href={ROUTES.root}
            >
              {t('return_to_homepage')}
            </Button>
          </div>
          <div className='hidden lg:flex'>
            <Copy />
          </div>
        </div>
        <div className='grow basis-3/5 rounded-xl bg-brown-3 flex items-center justify-center relative overflow-hidden'>
          <Image
            fill
            src='/sketch.jpg'
            alt='Equal Care Sketch'
            className='object-cover'
          />
        </div>
        <div className='flex lg:hidden'>
          <Copy />
        </div>
      </div>
    </div>
  );
};

const Copy = () => {
  const t = useTranslations();

  return (
    <div className='body-s-400 text-blue-2'>
      {t('copyright', { year: new Date().getFullYear() })}
    </div>
  );
};
