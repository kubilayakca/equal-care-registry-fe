'use client';

import { Icon } from '@/components/icon';
import { Logo } from '@/components/logo';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import NextLink from 'next/link';

export const Footer = () => {
  const t = useTranslations();

  return (
    <footer className='w-full bg-blue-2 relative overflow-hidden eq-px'>
      <div className='eq-container flex flex-col relative'>
        <div className='py-10 md:px-5 lg:px-10 flex max-lg:flex-col gap-10 lg:justify-between'>
          <Logo variant='light' />
          <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
            <div className='flex flex-col body-s-400 text-white items-start min-w-[11.25rem]'>
              <div className='pb-4 body-s-550 text-green-400 uppercase'>
                {t('our_address')}
              </div>
              <div className='whitespace-pre-line'>{t('company_address')}</div>
            </div>
            <div className='flex flex-col body-s-400 text-white items-start min-w-[11.25rem] max-md:order-[-1]'>
              <div className='pb-4 body-s-550 text-green-400 uppercase'>
                {t('contact_us')}
              </div>
              <NextLink href={`mailto:${t('company_email')}`}>
                {t('company_email')}
              </NextLink>
            </div>
            <div className='flex flex-col body-s-400 text-white items-start min-w-[11.25rem]'>
              <div className='pb-4 body-s-550 text-green-400 uppercase'>
                {t('follow_us')}
              </div>
              <div className='flex gap-4 text-white'>
                <NextLink
                  target='_blank'
                  href='TODO:'
                  rel='nofollow'
                  className='flex'
                >
                  <Icon
                    type='instagram'
                    size='medium'
                    className='cursor-pointer'
                  />
                </NextLink>
                <NextLink
                  target='_blank'
                  href='TODO:'
                  rel='nofollow'
                  className='flex'
                >
                  <Icon
                    type='linkedin'
                    size='medium'
                    className='cursor-pointer'
                  />
                </NextLink>
                <NextLink
                  target='_blank'
                  href='TODO:'
                  rel='nofollow'
                  className='flex'
                >
                  <Icon
                    type='youtube'
                    size='medium'
                    className='cursor-pointer'
                  />
                </NextLink>
              </div>
            </div>
          </div>
        </div>
        <div className='text-white-60 body-s-400 border-t border-white-60'>
          <div className='md:px-5 lg:px-10 pt-6 pb-8 flex max-md:flex-col justify-between gap-3 lg:gap-4 items-center'>
            {t('copyright', { year: new Date().getFullYear() })}
            <div className='flex gap-1 whitespace-nowrap'>
              Design & Development by{' '}
              <a
                className='underline shrink-0'
                target='_blank'
                rel='nofollow'
                href='https://www.roideworx.com/'
              >
                <Image
                  src='/roide.svg'
                  alt='Roide'
                  width={0}
                  height={0}
                  className='h-full w-auto top-0 bottom-0'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const FooterWrapper = () => {
  return (
    <div>
      <Footer />
    </div>
  );
};
