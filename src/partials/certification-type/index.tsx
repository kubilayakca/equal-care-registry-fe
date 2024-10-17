'use client';

import { Icon } from '@/components/icon';
import { SectionHeader } from '@/components/section-header';
import { BADGE_ICON_MAPPING, CERTIFICATION_TYPES } from '@/utils/constants';
import { TypesSwiper } from './swiper';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/controller';
import 'swiper/css/mousewheel';

export const CertificationType = ({
  type,
}: {
  type: (typeof CERTIFICATION_TYPES)[keyof typeof CERTIFICATION_TYPES];
}) => {
  const t = useTranslations();

  return (
    <div>
      <div className='eq-container eq-px py-5'>
        <TypesSwiper />
      </div>
      <div className={`relative bg-green-100`}>
        <div className='eq-container eq-px py-[3.75rem]'>
          <div className='flex flex-col'>
            <Image
              src={BADGE_ICON_MAPPING[type]}
              alt=''
              width={128}
              height={128}
            />
            <div className='h-8' />
            <h1 className='heading-05-400 text-blue2'>
              {t('certificate_badge')}
            </h1>
            <div className='h-2' />
            <h2 className='heading-02 text-green-500'>
              {t(`certification_type_${type}`)}
            </h2>
          </div>
        </div>
      </div>
      <div className='eq-container eq-px py-10'>
        <SectionHeader label={t('evaluation_criteria')} />
        <CriteriaTable />
      </div>
    </div>
  );
};

const CriteriaTable = () => {
  const t = useTranslations();

  return (
    <div className='grid grid-cols-[max-content,_1fr] lg:grid-cols-[max-content,_1fr,_1fr]'>
      <div className='max-lg:hidden px-10 bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tl-lg'>
        {t('evaluation_items')}
      </div>
      <div className='max-lg:hidden bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500'>
        {t('evaluation_description')}
      </div>
      <div className='max-lg:hidden bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tr-lg'>
        {t('methodology')}
      </div>

      <IndicationColumn label='Study Representation' />
      <IndicationValue
        content='Sufficient gender representation in comparison to prevalence in the population present in foundational research.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Ensure that foundational research includes a gender representation that reflects the prevalence in the population. Companies must provide data demonstrating this balance in their studies, showing that both genders are adequately represented in clinical trials. Deviation up to 25 percentage point will be accepted since exact recruitment can be associated with disproportional efforts in resource and time. In the future we aim to lower this standard.'
        column='methodology'
      />

      <IndicationColumn label='Efficacy / Accuracy' />
      <IndicationValue
        content='Gender-segregated data efficacy.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Provide efficacy/accuracy data segregated by gender. Companies must provide evidence of how the medication/diagnostic/treatment performs separately for men and women. This includes presenting results from clinical trials and other efficacy/accuracy studies.'
        column='methodology'
      />

      <IndicationColumn label='Posology' />
      <IndicationValue
        content='Gender-segregated data for posology.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Provide gender-segregated data for posology (the study of drug dosages). Companies must demonstrate that they have considered gender differences in dosage recommendations and have evidence to support the appropriate dosages for men and women. This includes detailed documentation of clinical trials focusing on dosage variations between genders.'
        column='methodology'
      />

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Gender-segregated date for possible side effects available.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Specify the type of study used for market entry approval. Companies must provide information about the study designs and evidence levels that were used to obtain market approval for their medication. This includes details about clinical trials, observational studies, and any other research methodologies that support the medications safety and efficacy.'
        column='methodology'
      />

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Type of study used for market entry approval.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Specify the type of study used for market entry approval. Companies must provide information about the study designs and evidence levels that were used to obtain market approval for their medication. This includes details about clinical trials, observational studies, and any other research methodologies that support the medications safety and efficacy.'
        column='methodology'
      />

      <IndicationColumn label='Level of Evidence' />
      <IndicationValue
        content='Level of evidence for market entry'
        column='evaluation_description'
      />
      <IndicationValue
        content='Appropriate level evidence to facilitate the market entry and certification process.'
        column='methodology'
      />
    </div>
  );
};

const IndicationColumn = ({ label }: { label: string }) => {
  const t = useTranslations();

  return (
    <div className='py-4 lg:py-3 lg:px-4 lg:border-b lg:border-l lg:border-r lg:border-gray-100 max-lg:col-span-2 lg:bg-green-50 body-m-500 flex gap-2 text-green-500'>
      <Icon type='checkmark-filled' />
      <div className='text-blue-2'>{label}</div>
    </div>
  );
};

const IndicationValue = ({
  content,
  column,
}: {
  content: string;
  column: string;
}) => {
  const t = useTranslations();

  return (
    <>
      <div
        className={`lg:hidden h-full bg-green-800 min-h-[3.75rem] flex items-center text-white body-m-500 min-w-[7.5rem] p-4`}
      >
        {t(column)}
      </div>

      <div
        className={`border-b border-r border-gray-100 flex bg-green-50 body-m-400 text-blue-2 py-3 px-4 ${
          column === 'evaluation_description' ? 'max-lg:border-t' : ''
        }`}
      >
        <div
          className='body-m-400 text-blue-85'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
};
