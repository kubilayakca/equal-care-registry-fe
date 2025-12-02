import { BADGE_ICON_MAPPING } from '@/utils/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const Badge = ({ type, isEvaluation = false }: { type: string; isEvaluation?: boolean }) => {
  const t = useTranslations();

  return (
    <div className='w-full md:w-[26.25rem] bg-green-100 rounded-xl p-8 shrink-0'>
      <div className='heading-05-500 text-blue-2'>
        {isEvaluation ? t('evaluation_badge_title') : t('certificate_badge_title')}
      </div>
      <div className='mt-5 mb-6 h-px bg-blue-20' />
      <div className='flex flex-col items-center'>
        <Image src={BADGE_ICON_MAPPING[type]} width={96} height={96} alt='' />
        <div className='text-blue-2 mt-4'>{isEvaluation ? t('evaluation_badge') : t('certificate_badge')}</div>
        <div className='text-green-500 heading-05-400 text-center'>
          {t(`certification_type_${type}`)}
        </div>
      </div>
      <div className='mt-5 h-px bg-blue-20' />
    </div>
  );
};
