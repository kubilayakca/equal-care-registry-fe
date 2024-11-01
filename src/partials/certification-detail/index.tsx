'use client';

import { useTranslations } from 'next-intl';
import { CERTIFICATES, ICON_MAPPING } from '@/utils/constants';
import { Chip } from '@/components/chip';
import { Badge } from './badge';
import { Company } from './company';
import { Details } from './details';
import Image from 'next/image';
import NextLink from 'next/link';

export const CertificationDetail = ({
  certificate,
}: {
  certificate: (typeof CERTIFICATES)[0];
}) => {
  return (
    <div className='lg:px-5 bg-blue-4'>
      <div className='eq-container mt-[3.75rem] mb-5'>
        {certificate && (
          <div className='flex flex-col gap-5'>
            <CertificateItemCard item={certificate} />
            <Details certificate={certificate} />
            <div className='flex max-md:flex-col gap-5'>
              <Badge type={certificate.type} />
              <Company company={certificate.company} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CertificateItemCard = ({ item }: { item: (typeof CERTIFICATES)[0] }) => {
  const t = useTranslations();

  return (
    <div className='bg-white px-4 lg:px-6 py-8 lg:rounded-xl flex max-lg:flex-col gap-6 lg:gap-12'>
      <div className='w-32 h-32 rounded-lg border border-gray-100 shrink-0 flex items-center justify-center'>
        {item.image ? (
          <Image
            src={item.image}
            alt=''
            width={0}
            height={0}
            className='w-full h-full object-contain'
            sizes='100vw'
          />
        ) : (
          <Image
            src={ICON_MAPPING[item.type]}
            alt=''
            width={64}
            height={64}
            sizes='100vw'
          />
        )}
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex flex-col gap-3'>
          <div className='heading-04-500 text-blue-2'>{item.name}</div>
          <div className='body-m-400 text-blue-85'>{item.description}</div>
        </div>
        <div className='bg-blue-20 mt-6 mb-4 h-px' />
        <div className='grid grid-cols-[max-content,_auto] md:grid-cols-[minmax(max-content,_auto),_auto] lg:grid-cols-[minmax(12.5rem,_max-content),_auto] gap-5 lg:gap-4'>
          <div className='body-l-500 text-blue-2'>{t('company')}:</div>
          <div className='text-green-500 body-m-400'>
            <NextLink
              href={item.company.website}
              target='_blank'
              rel='nofollow'
            >
              {item.company.name}
            </NextLink>
          </div>
          {/* <div className='body-l-500 text-blue-2'>{t('atc_code')}:</div>
          <div className='text-gray-500 body-m-400 flex items-center gap-2'>
            <div className='pt-0.5'>{item.atc.code}</div>
            <div>
              <InfoTooltip text={item.atc.description} />
            </div>
          </div> */}
          {/* @ts-ignore */} 
          {item.ingredients?.length > 0 && 
          (
            <>
              <div className='body-l-500 text-blue-2'>
                {t('active_ingredients')}:
              </div>
              <div className='flex gap-2 flex-wrap'>
                {/* @ts-ignore */} 
                {item.ingredients.map((ing, i) => {
                  return (
                    <Chip key={i} icon={ing.icon}>
                      {ing.name}
                    </Chip>
                  );
                })}
              </div>
            </>
          )}
          {/* <div className='body-l-500 text-blue-2'>{t('last_updated')}:</div> */}
          {/* <div className='text-gray-500 body-m-400'>
            {format(new Date(item.lastUpdated), 'dd MMM yyyy')}
          </div> */}
        </div>
      </div>
    </div>
  );
};
