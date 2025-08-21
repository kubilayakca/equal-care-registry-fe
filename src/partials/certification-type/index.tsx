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
import { useMemo } from 'react';

export const CertificationType = ({
  type,
}: {
  type: (typeof CERTIFICATION_TYPES)[keyof typeof CERTIFICATION_TYPES];
}) => {
  const t = useTranslations();

  console.log('type', type);

  const SelectedType = useMemo(() => {
    switch (type) {
      case CERTIFICATION_TYPES.medication:
        return <CriteriaTableForMedicationAndDiagnosticAndTreatment/>;
      case CERTIFICATION_TYPES.diagnosticTreatment:
       return <CriteriaTableForMedicationAndDiagnosticAndTreatment/>;
      case CERTIFICATION_TYPES.diagnosticTreatment:
        return <CriteriaTableForDigitalPreventionAndDiagnosticAndTreatment/>;
      case CERTIFICATION_TYPES.digitalDiagnosticTreatment:
        return <CriteriaTableForDigitalPreventionAndDiagnosticAndTreatment/>;
      case CERTIFICATION_TYPES.digitalPrevention:
        return <CriteriaTableForDigitalPrevention/>;
      case CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment:
        return <CriteriaTableForAISupportedDiagnosticAndTreatment/>;
      case CERTIFICATION_TYPES.femTech:
        return <CriteriaTableForFemTechAndMaleTech/>;
      case CERTIFICATION_TYPES.maleTech:
        return <CriteriaTableForFemTechAndMaleTech/>;
    }
  }, [type]);

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
              priority
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
        { SelectedType }
      </div>
    </div>
  );
};

const CriteriaTableForMedicationAndDiagnosticAndTreatment = () => {
  const t = useTranslations();

  return (
    <div className='grid grid-cols-[max-content,_1fr] lg:grid-cols-[max-content,_1fr]'>
      <div className='max-lg:hidden px-10 bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tl-lg'>
        {t('evaluation_items')}
      </div>
      <div className='max-lg:hidden bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500'>
        {t('evaluation_description')}
      </div>
      <IndicationColumn label='Study Representation' />
      <IndicationValue
        content='Sufficient gender representation in comparison to prevalence in the population present in foundational research.'
        column='evaluation_description'
      />
      

      <IndicationColumn label='Efficacy / Accuracy' />
      <IndicationValue
        content='Gender-segregated data efficacy.'
        column='evaluation_description'
      />
     

      <IndicationColumn label='Posology' />
      <IndicationValue
        content='Gender-segregated data for posology.'
        column='evaluation_description'
      />
      

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Gender-segregated date for possible side effects available.'
        column='evaluation_description'
      />
      

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Type of study used for market entry approval.'
        column='evaluation_description'
      />
      

      <IndicationColumn label='Level of Evidence' />
      <IndicationValue
        content='Level of evidence for market entry'
        column='evaluation_description'
      />
      
    </div>
  );
};

const CriteriaTableForDigitalPreventionAndDiagnosticAndTreatment = () => {
  const t = useTranslations();

  return (
    <div className='grid grid-cols-[max-content,_1fr] lg:grid-cols-[max-content,_1fr]'>
      <div className='max-lg:hidden px-10 bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tl-lg'>
        {t('evaluation_items')}
      </div>
      <div className='max-lg:hidden bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500'>
        {t('evaluation_description')}
      </div>

      <IndicationColumn label='Study Representation' />
      <IndicationValue
        content='Sufficient gender representation in comparison to prevalence in the population present in foundational research.'
        column='evaluation_description'
      />

      <IndicationColumn label='Efficacy / Accuracy' />
      <IndicationValue
        content='Gender-segregated data efficacy.'
        column='evaluation_description'
      />

      <IndicationColumn label='Functionality' />
      <IndicationValue
        content='Functionality accounts for gender-specific needs as input variables and generates output accordingly for prevention, diagnostics and treatment.'
        column='evaluation_description'
      />

      <IndicationColumn label='Personalization' />
      <IndicationValue
        content='Functionality accounts for further personalized needs as input variables and generates output accordingly for prevention, diagnostics and treatment.'
        column='evaluation_description'
      />

      <IndicationColumn label='Accessibility' />
      <IndicationValue
        content='Ensure all users, including those with disabilities, can effectively perceive, understand, navigate, and interact with the digital prevention/diagnostics/treatment. Accessibility of UI Design, Content, Documentation and Help, Compliance with Accessibility Standards'
        column='evaluation_description'
      />

      <IndicationColumn label='Affordability' />
      <IndicationValue
        content='Costs associated with the application for Users, Healthcare Professionals and Organizations.'
        column='evaluation_description'
      />

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Evidence of any possible side effects or absences of them.'
        column='evaluation_description'
      />

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Ensure that the application meets relevant regulatory requirements and ethical guidelines.'
        column='evaluation_description'
      />

      <IndicationColumn label='Level of Evidence' />
      <IndicationValue
        content='Level of evidence for application development, Level of evidence for application validations'
        column='evaluation_description'
      />
    </div>
  );
};

const CriteriaTableForAISupportedDiagnosticAndTreatment = () => {
  const t = useTranslations();

  return (
    <div className='grid grid-cols-[max-content,_1fr] lg:grid-cols-[max-content,_1fr]'>
      <div className='max-lg:hidden px-10 bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tl-lg'>
        {t('evaluation_items')}
      </div>
      <div className='max-lg:hidden bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500'>
        {t('evaluation_description')}
      </div>

      <IndicationColumn label='Study Representation' />
      <IndicationValue
        content='Sufficient gender representation in comparison to prevalence in the population present in foundational research.'
        column='evaluation_description'
      />

      <IndicationColumn label='Training Data Quality' />
      <IndicationValue
        content='Sufficient gender representation in comparison to prevalence in the population.
Information on the origin and quality of the training data.
Transparency in data preprocessing and applied transformations.
Investigation and documentation of possible biases in the data and their impact on the model.'
        column='evaluation_description'
      />

      <IndicationColumn label='Validation Data Quality' />
      <IndicationValue
        content='Sufficient gender representation in comparison to prevalence in the population.
Information on the origin and quality of the training data.
Transparency in data preprocessing and applied transformations.
Investigation and documentation of possible biases in the data and their impact on the model.'
        column='evaluation_description'
      />

      <IndicationColumn label='Algorithm Adaptability' />
      <IndicationValue
        content={`Assessment of the importance of gender-specific needs as input variables for the model's decisions are included.`}
        column='evaluation_description'
      />

      <IndicationColumn label='Efficacy/ Accuracy' />
      <IndicationValue
        content={`Validation of the model’s performance as a whole and segregated by gender was done.`}
        column='evaluation_description'
      />

      <IndicationColumn label='Transparency' />
      <IndicationValue
        content='Explainability of the hyperparameters used, the training dataset, and the training process.'
        column='evaluation_description'
      />

      <IndicationColumn label='Accessibility' />
      <IndicationValue
        content='Provide explanations in a way that is understandable even to non-experts.'
        column='evaluation_description'
      />

      <IndicationColumn label='Affordability' />
      <IndicationValue
        content='Costs associated with the application for Users, Healthcare Professionals and Organizations'
        column='evaluation_description'
      />

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Evidence of any possible side effects or absences of them.'
        column='evaluation_description'
      />

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Ensure that the algorithm meets relevant regulatory requirements and ethical guidelines.'
        column='evaluation_description'
      />

      <IndicationColumn label='Level of Evidence' />
      <IndicationValue
        content='Level of evidence for AI development, Level of evidence for AI validation'
        column='evaluation_description'
      />
    </div>
  );
};


const CriteriaTableForFemTechAndMaleTech = () => {
  const t = useTranslations();

  return (
    <div className='grid grid-cols-[max-content,_1fr] lg:grid-cols-[max-content,_1fr]'>
      <div className='max-lg:hidden px-10 bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tl-lg'>
        {t('evaluation_items')}
      </div>
      <div className='max-lg:hidden bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500'>
        {t('evaluation_description')}
      </div>

      <IndicationColumn label='Healthcare Gap Relevance' />
      <IndicationValue
        content='The extent to which an intervention effectively addresses and mitigates disparities in healthcare access, quality, and outcomes. Ensure the intervention contributes to closing the healthcare gaps that exist due to gender-related factors.'
        column='evaluation_description'
      />

      <IndicationColumn label='Efficacy/ Accuracy' />
      <IndicationValue
        content='Gender-segregated data for efficacy.'
        column='evaluation_description'
      />

      <IndicationColumn label='Accessibility' />
      <IndicationValue
        content={`Accessibility of UI Design, Content, Documentation and Help. Compliance with Accessibility Standards`}
        column='evaluation_description'
      />

      <IndicationColumn label='Affordability' />
      <IndicationValue
        content={`Costs associated with the application for Users, Healthcare Professionals and Organizations.`}
        column='evaluation_description'
      />

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Evidence of any possible side effects or absences of them.'
        column='evaluation_description'
      />

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Ensure that the application meets relevant regulatory requirements and ethical guidelines.'
        column='evaluation_description'
      />

      <IndicationColumn label='Level of Evidence' />
      <IndicationValue
        content='Level of evidence for application development, Level of evidence for application validations'
        column='evaluation_description'
      />
    </div>
  );
};

const CriteriaTableForDigitalPrevention = () => {
  const t = useTranslations();

  return (
    <div className='grid grid-cols-[max-content,_1fr] lg:grid-cols-[max-content,_1fr]'>
      <div className='max-lg:hidden px-10 bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tl-lg'>
        {t('evaluation_items')}
      </div>
      <div className='max-lg:hidden bg-green-800 h-[3.75rem] flex items-center justify-center text-white body-m-500'>
        {t('evaluation_description')}
      </div>

      <IndicationColumn label='Healthcare Gap Relevance' />
      <IndicationValue
        content='The extent to which an intervention effectively addresses and mitigates disparities in healthcare access, quality, and outcomes. Ensure the intervention contributes to closing the healthcare gaps that exist due to gender-related factors.'
        column='evaluation_description'
      />

      <IndicationColumn label='Efficacy/ Accuracy' />
      <IndicationValue
        content='Gender-segregated data for efficacy.'
        column='evaluation_description'
      />

      <IndicationColumn label='Accessibility' />
      <IndicationValue
        content={`Accessibility of UI Design, Content, Documentation and Help. Compliance with Accessibility Standards`}
        column='evaluation_description'
      />

      <IndicationColumn label='Affordability' />
      <IndicationValue
        content={`Costs associated with the application for Users, Healthcare Professionals and Organizations.`}
        column='evaluation_description'
      />

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Evidence of any possible side effects or absences of them.'
        column='evaluation_description'
      />

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Ensure that the application meets relevant regulatory requirements and ethical guidelines.'
        column='evaluation_description'
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
