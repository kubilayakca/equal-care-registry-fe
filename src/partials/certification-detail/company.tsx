import { useTranslations } from 'next-intl';
import Image from 'next/image';
import NextLink from 'next/link';

export const Company = ({ company }: { company: any }) => {
  const t = useTranslations();

  return (
    <div className='bg-white py-8 px-6 rounded-xl grow flex max-lg:flex-col gap-6 lg:gap-10 items-start'>
      <Image src={company.image} alt='' width={72} height={72} />
      <div className='flex flex-col lg:grow'>
        <div className='heading-05-500 text-blue-2'>{company.name}</div>
        <div className='body-l-400 text-gray-500'>{company.description}</div>
        <div className='my-5 h-px bg-gray-50' />
        <div className='grid grid-cols-[max-content,_auto] md:grid-cols-[minmax(max-content,_auto),_auto] lg:grid-cols-[minmax(12.5rem,_max-content),_auto] gap-5 lg:gap-4'>
          <div className='body-l-500 text-blue-2'>{t('website')}:</div>
          <NextLink
            href={company.website}
            target='_blank'
            rel='nofollow'
            className='body-m-400 text-green-500'
          >
            {company.website}
          </NextLink>
          <div className='body-l-500 text-blue-2'>{t('address')}:</div>
          <div className='body-m-400 text-blue-85'>
            <div className='whitespace-pre-line'>{company.address}</div>
          </div>
          <div className='body-l-500 text-blue-2'>
            {t('medical_info_line')}:
          </div>
          <NextLink
            href={`tel:${company.medicalInfoLine.replace(/ /g, '')}`}
            className='body-m-400 text-green-500'
          >
            {company.medicalInfoLine}
          </NextLink>
          <div className='body-l-500 text-blue-2'>
            {t('medical_info_email')}:
          </div>
          <NextLink
            href={`mailto:${company.medicalInfoEmail}`}
            className='body-m-400 text-green-500'
          >
            {company.medicalInfoEmail}
          </NextLink>
        </div>
      </div>
    </div>
  );
};
