'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Logo } from '@/components/logo';
import { ROUTES } from '@/utils/constants';
import { Icon } from '@/components/icon';
import { IconButton } from '@/components/icon-button';
import { CountrySelector } from '@/components/country-selector';
import { LanguageSelector } from '@/components/language-selector';
import useBreakpoint from '@/utils/hooks/use-breakpoints';
import NextLink from 'next/link';
import Drawer from 'react-modern-drawer';
import Image from 'next/image';

import 'react-modern-drawer/dist/index.css';

export const Header = ({
  variant = 'light',
}: {
  variant?: 'light' | 'dark';
}) => {
  const t = useTranslations();
  const headerRef = useRef(null);
  const breakpoint = useBreakpoint();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    const handleUnload = () => {
      window.scrollTo(0, 0);
    };
    window?.addEventListener('unload', handleUnload);
    return () => {
      window?.removeEventListener('unload', handleUnload);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`relative h-[5.5rem] z-50 eq-px flex items-center border-b border-blue-20 ${
          variant === 'dark' ? 'bg-blue-2' : 'bg-white'
        }`}
      >
        <div className='eq-container flex justify-between'>
          <Link href={ROUTES.root}>
            <Logo variant={variant === 'dark' ? 'light' : 'dark'} />
          </Link>
          <div className='hidden md:flex md:gap-2'>
            <CountrySelector />
            <LanguageSelector />
          </div>

          <div className='md:hidden'>
            <IconButton
              icon='menu'
              variant='tertiary'
              className='px-6'
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </header>
      {breakpoint === 'sm' && (
        <Drawer
          open={isDrawerOpen}
          onClose={toggleDrawer}
          direction='right'
          size='100svw'
          className='pt-32 px-4 pb-5 bg-green-50 !shadow-none flex flex-col relative z-10 md:hidden'
          lockBackgroundScroll
          enableOverlay={false}
          zIndex={10}
        >
          <div className='grid grid-cols-2 divide-x divide-blue-20 body-l-500 text-blue-2'>
            <div className='pr-5 flex flex-col gap-2 items-center'>
              <Image src='/icons/flags-de.svg' width={45} height={32} alt='' />
              {t('countries.de')}
            </div>
            <div className='pl-5 flex flex-col gap-2 items-center'>
              <Image src='/icons/languages.svg' width={36} height={36} alt='' />
              {t('languages.default')}
            </div>
          </div>
          <div className='h-10' />
          <div>
            <Link
              href={ROUTES.root}
              className='py-3 flex justify-between items-center heading-05-400 text-blue-1 border-b border-blue-20'
            >
              {t('homepage')}
              <IconButton icon='arrow-right' variant='tertiary' />
            </Link>

            <Accordion transition transitionTimeout={250}>
              <AccordionItem
                buttonProps={{
                  className:
                    'w-full py-3 heading-05-400 text-blue-1 border-b border-blue-20',
                }}
                contentProps={{
                  style: {
                    transition: 'height 0.25s cubic-bezier(0, 0, 0, 1)',
                  },
                }}
                header={({ state }) => (
                  <div className='flex justify-between items-center w-full'>
                    {t('certification_criteria')}
                    <IconButton
                      useDiv
                      icon={
                        state.status === 'entered' ||
                        state.status === 'entering'
                          ? 'chevron-up'
                          : 'chevron-down'
                      }
                      variant='tertiary'
                    />
                  </div>
                )}
              >
                <div className='flex flex-col gap-2 body-l-400 text-blue-1 py-4'>
                  <Link
                    href={ROUTES.certificateTypeMedication}
                    onClick={closeDrawer}
                    className='flex gap-3 items-center py-2'
                  >
                    <Image
                      src='/icons/medication-dark.svg'
                      width={0}
                      height={0}
                      className='h-8 w-8'
                      alt=''
                    />
                    {t('certification_type_medication')}
                  </Link>
                  <Link
                    href={ROUTES.certificateTypeDiagnosticTreatment}
                    onClick={closeDrawer}
                    className='flex gap-3 items-center py-2'
                  >
                    <Image
                      src='/icons/diagnostic-treatment-dark.svg'
                      width={0}
                      height={0}
                      className='h-8 w-8'
                      alt=''
                    />
                    {t('certification_type_diagnostic_treatment')}
                  </Link>
                  <Link
                    href={ROUTES.certificateTypeDigitalDiagnosticTreatment}
                    onClick={closeDrawer}
                    className='flex gap-3 items-center py-2'
                  >
                    <Image
                      src='/icons/digital-diagnostic-treatment-dark.svg'
                      width={0}
                      height={0}
                      className='h-8 w-8'
                      alt=''
                    />
                    {t('certification_type_digital_diagnostic_treatment')}
                  </Link>
                  <Link
                    href={ROUTES.certificateTypeAiSupportedDiagnosticTreatment}
                    onClick={closeDrawer}
                    className='flex gap-3 items-center py-2'
                  >
                    <Image
                      src='/icons/ai-supported-diagnostic-treatment-dark.svg'
                      width={0}
                      height={0}
                      className='h-8 w-8'
                      alt=''
                    />
                    {t('certification_type_ai_supported_diagnostic_treatment')}
                  </Link>
                  <Link
                    href={ROUTES.certificateTypeFemaleTech}
                    onClick={closeDrawer}
                    className='flex gap-3 items-center py-2'
                  >
                    <Image
                      src='/icons/femaletech-dark.svg'
                      width={0}
                      height={0}
                      className='h-8 w-8'
                      alt=''
                    />
                    {t('certification_type_femaletech')}
                  </Link>
                  <Link
                    href={ROUTES.certificateTypeMaleTech}
                    onClick={closeDrawer}
                    className='flex gap-3 items-center py-2'
                  >
                    <Image
                      src='/icons/maletech-dark.svg'
                      width={0}
                      height={0}
                      className='h-8 w-8'
                      alt=''
                    />
                    {t('certification_type_maletech')}
                  </Link>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='mt-auto pt-5 border-t border-blue-20 flex flex-col gap-3'>
            <div className='flex gap-3 text-blue-2'>
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
                <Icon type='youtube' size='medium' className='cursor-pointer' />
              </NextLink>
            </div>
            <div className='body-s-400 text-blue-60'>
              {t('copyright', { year: new Date().getFullYear() })}
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
};

export const HeaderWrapper = () => {
  const pathname = usePathname();

  const headerVariant = useMemo(() => {
    if (
      pathname === ROUTES.certificateTypeMedication ||
      pathname === ROUTES.certificateTypeDiagnosticTreatment ||
      pathname === ROUTES.certificateTypeDigitalDiagnosticTreatment ||
      pathname === ROUTES.certificateTypeAiSupportedDiagnosticTreatment ||
      pathname === ROUTES.certificateTypeFemaleTech ||
      pathname === ROUTES.certificateTypeMaleTech
    ) {
      return 'dark';
    }

    return 'light';
  }, [pathname]);

  return <Header variant={headerVariant} />;
};
