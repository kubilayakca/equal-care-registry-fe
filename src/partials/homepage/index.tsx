'use client';

import { Link } from '@/navigation';
import {
  CERTIFICATES,
  CERTIFICATION_TYPES,
  COMPANIES,
  ICON_MAPPING,
  ROUTES,
} from '@/utils/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useMemo } from 'react';

export const Homepage = () => {
  return (
    <>
      <Banner />
      <Certifications />
      <Certificates />
      <Companies />
    </>
  );
};

const Banner = () => {
  const t = useTranslations();

  return (
    <div className='relative banner-bg'>
      <div className='eq-container eq-px h-[32.5rem] flex flex-col justify-center'>
        <div className='flex flex-col gap-16 heading-01 text-white md:whitespace-pre-line'>
          {t('hero_banner_title')}
          <div className='body-l-400 text-white heading-05-400'>
            {t('hero_banner_subtitle')}
          </div>
        </div>
      </div>
      {/* <Image
      src={heroBanner}
      placeholder='blur'
      alt=''
      fill
      className='object-cover'
    /> */}
    </div>
  );
};

const Certifications = () => {
  const t = useTranslations();

  return (
    <div className='bg-white py-10 eq-px'>
      <div className='eq-container flex flex-col gap-6'>
        <div className='text-blue-2 font-gabarito heading-05-500'>
          {t('certifications_title')}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <CertificationType
            icon='/icons/medication-dark.svg'
            label={t('certification_type_medication')}
            href={ROUTES.certificateTypeMedication}
          />
          <CertificationType
            icon='/icons/diagnostic-treatment-dark.svg'
            label={t('certification_type_diagnostic_treatment')}
            href={ROUTES.certificateTypeDiagnosticTreatment}
          />
          <CertificationType
            icon='/icons/digital-diagnostic-treatment-dark.svg'
            label={t('certification_type_digital_diagnostic_treatment')}
            href={ROUTES.certificateTypeDigitalDiagnosticTreatment}
          />
          <CertificationType
            icon='/icons/ai-supported-diagnostic-treatment-dark.svg'
            label={t('certification_type_ai_supported_diagnostic_treatment')}
            href={ROUTES.certificateTypeAiSupportedDiagnosticTreatment}
          />
          <CertificationType
            icon='/icons/femaletech-dark.svg'
            label={t('certification_type_femtech')}
            href={CERTIFICATION_TYPES.femTech}
          />
          <CertificationType
            icon='/icons/maletech-dark.svg'
            label={t('certification_type_maletech')}
            href={CERTIFICATION_TYPES.maleTech}
          />
        </div>
      </div>
    </div>
  );
};

const CertificationType = ({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className='flex flex-col gap-4 py-4 px-6 bg-green-100 body-l-400 rounded-xl'
    >
      <div className='h-14'>
        <Image
          src={icon}
          alt=''
          width={0}
          height={0}
          className='h-full w-auto object-left'
          sizes='100vw'
        />
      </div>
      {label}
    </Link>
  );
};

const Certificates = () => {
  const t = useTranslations();

  return (
    <div className='bg-blue-4 py-12 eq-px'>
      <div className='eq-container flex flex-col gap-6'>
        <div className='text-blue-2 font-gabarito heading-05-500'>
          {t('certificates_title')}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6'>
          {CERTIFICATES.map((item, i) => {
            return <CertificateItemCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const CertificateItemCard = ({ item }: { item: (typeof CERTIFICATES)[0] }) => {
  const route = useMemo(() => {
    return item.type === CERTIFICATION_TYPES.medication
      ? ROUTES.certificateMedication
      : [
          CERTIFICATION_TYPES.diagnosticTreatment,
          CERTIFICATION_TYPES.digitalDiagnosticTreatment,
          CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment,
        ].includes(item.type)
      ? ROUTES.certificateTreatment
      : [CERTIFICATION_TYPES.femTech, CERTIFICATION_TYPES.maleTech].includes(
          item.type
        )
      ? ROUTES.certificateService
      : '';
  }, [item.type]);

  return (
    <Link
      href={
        {
          pathname: route,
          params: { slug: item.slug || '' },
        } as any
      }
    >
      <div className='h-[17.5rem] bg-white rounded-xl mb-2.5 flex items-center justify-center'>
        <Image src={ICON_MAPPING[item.type]} alt='' width={64} height={64} />
      </div>
      <div>
        <div className='text-blue-2 body-l-500'>{item.name}</div>
        <div className='text-blue-60 body-s-400'>{item.company.name}</div>
      </div>
    </Link>
  );
};

const Companies = () => {
  const t = useTranslations();

  return (
    <div className='bg-white py-12 eq-px'>
      <div className='eq-container flex flex-col gap-6'>
        <div className='text-blue-2 font-gabarito heading-05-500'>
          {t('companies_title')}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6'>
          {COMPANIES.map((item, i) => {
            return <CompanyItemCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const CompanyItemCard = ({ item }: { item: (typeof COMPANIES)[0] }) => {
  return (
    <div className='bg-white py-8 px-6 flex gap-10 items-start'>
      <Image src={item.image} alt='' width={72} height={72} />
      <div className='flex flex-col gap-2'>
        <div className='text-blue-2 heading-05-500'>{item.name}</div>
        <div className='text-blue-85 body-m-400 mb-5'>{item.country}</div>
        <div className='mt-auto h-px bg-gray-100' />
      </div>
    </div>
  );
};
