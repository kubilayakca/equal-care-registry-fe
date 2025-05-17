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

const CriteriaTableForDigitalPreventionAndDiagnosticAndTreatment = () => {
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
        content='Ensure that foundational research includes a gender representation that reflects the prevalence in the population. Companies must provide data demonstrating this balance in their studies. Deviation up to 25 percentage point will be accepted since exact recruitment can be associated with disproportional efforts in resource and time.'
        column='methodology'
      />

      <IndicationColumn label='Efficacy / Accuracy' />
      <IndicationValue
        content='Gender-segregated data efficacy.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Ensure that efficacy data is segregated by gender. Companies must provide evidence showing the effectiveness of their application for different genders, demonstrating that it performs well across these groups.'
        column='methodology'
      />

      <IndicationColumn label='Functionality' />
      <IndicationValue
        content='Functionality accounts for gender-specific needs as input variables and generates output accordingly for prevention, diagnostics and treatment.'
        column='evaluation_description'
      />
      <IndicationValue
        content='The application must account for gender-specific needs by incorporating them as input variables. It should generate appropriate outputs for prevention, diagnostics, and treatment based on these gender-specific inputs. Companies need to provide documentation of how their application addresses these needs.'
        column='methodology'
      />

      <IndicationColumn label='Personalization' />
      <IndicationValue
        content='Functionality accounts for further personalized needs as input variables and generates output accordingly for prevention, diagnostics and treatment.'
        column='evaluation_description'
      />
      <IndicationValue
        content='If the application supports further personalization by incorporating individual user needs as input variables, it should generate tailored outputs for prevention, diagnostics, and treatment based on these personalized inputs. Companies must demonstrate how their application personalizes care and provides documentation of these capabilities.'
        column='methodology'
      />

      <IndicationColumn label='Accessibility' />
      <IndicationValue
        content='Ensure all users, including those with disabilities, can effectively perceive, understand, navigate, and interact with the digital prevention/diagnostics/treatment. Accessibility of UI Design, Content, Documentation and Help, Compliance with Accessibility Standards'
        column='evaluation_description'
      />
      <IndicationValue
        content='Ensure all users, including those with disabilities, can effectively perceive, understand, navigate, and interact with the application. Compliance with requirements and guidelines on useability for example ISO/IEC 62366, ISO 9241 or FDA.'
        column='methodology'
      />

      <IndicationColumn label='Affordability' />
      <IndicationValue
        content='Costs associated with the application for Users, Healthcare Professionals and Organizations.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Describe the cost model associated with the application for users, healthcare professionals, and organizations. Companies must provide information, contact or reference.'
        column='methodology'
      />

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Evidence of any possible side effects or absences of them.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Provide evidence of any possible side effects or the absence thereof. Companies need to document and present findings related to side effects.'
        column='methodology'
      />

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Ensure that the application meets relevant regulatory requirements and ethical guidelines.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Ensure that the application complies with relevant regulatory requirements and ethical guidelines. Companies must provide documentation of their compliance measures. References to GDPR, HIIPA, MDR, FDA, ISO 13485 and others.'
        column='methodology'
      />

      <IndicationColumn label='Level of Evidence' />
      <IndicationValue
        content='Level of evidence for application development, Level of evidence for application validations'
        column='evaluation_description'
      />
      <IndicationValue
        content='Appropriate level evidence to facilitate the certification process.'
        column='methodology'
      />
    </div>
  );
};

const CriteriaTableForAISupportedDiagnosticAndTreatment = () => {
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

      <IndicationColumn label='Training Data Quality' />
      <IndicationValue
        content='Sufficient gender representation in comparison to prevalence in the population.
Information on the origin and quality of the training data.
Transparency in data preprocessing and applied transformations.
Investigation and documentation of possible biases in the data and their impact on the model.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Companies must:
Ensure gender representation in their training data matches the population prevalence as closely as possible.
Provide detailed information on the origin and quality of the training data.
Maintain transparency in data preprocessing and any transformations applied.
Investigate and document potential biases in the data and their impacts on the model.'
        column='methodology'
      />

      <IndicationColumn label='Validation Data Quality' />
      <IndicationValue
        content='Sufficient gender representation in comparison to prevalence in the population.
Information on the origin and quality of the training data.
Transparency in data preprocessing and applied transformations.
Investigation and documentation of possible biases in the data and their impact on the model.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Companies must:
Ensure gender representation in their validation data matches the population prevalence as closely as possible.
Provide detailed information on the origin and quality of the validation data.
Maintain transparency in data preprocessing and any transformations applied.
Investigate and document potential biases in the data and their impacts on the model.'
        column='methodology'
      />

      <IndicationColumn label='Algorithm Adaptability' />
      <IndicationValue
        content={`Assessment of the importance of gender-specific needs as input variables for the model's decisions are included.`}
        column='evaluation_description'
      />
      <IndicationValue
        content={`Assess and document the inclusion of gender-specific needs as input variables for the model's decisions. Companies must demonstrate how these needs influence model outcomes.`}
        column='methodology'
      />

      <IndicationColumn label='Efficacy/ Accuracy' />
      <IndicationValue
        content={`Validation of the model’s performance as a whole and segregated by gender was done.`}
        column='evaluation_description'
      />
      <IndicationValue
        content={`Validate the model's performance as a whole and separately by gender. Companies need to provide evidence of this validation process and its results.`}
        column='methodology'
      />

      <IndicationColumn label='Transparency' />
      <IndicationValue
        content='Explainability of the hyperparameters used, the training dataset, and the training process.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Ensure the explainability of the hyperparameters used, the training dataset, and the training process. Companies must provide clear documentation of these aspects.'
        column='methodology'
      />

      <IndicationColumn label='Accessibility' />
      <IndicationValue
        content='Provide explanations in a way that is understandable even to non-experts.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Provide explanations of the model and its processes in a manner understandable to non-experts. Companies should use clear and accessible language in their documentation.'
        column='methodology'
      />

      <IndicationColumn label='Affordability' />
      <IndicationValue
        content='Costs associated with the application for Users, Healthcare Professionals and Organizations'
        column='evaluation_description'
      />
      <IndicationValue
        content='Describe the cost model associated with the application for users, healthcare professionals, and organizations. Companies must provide information, contact or reference.'
        column='methodology'
      />

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Evidence of any possible side effects or absences of them.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Provide evidence of any possible side effects or the absence thereof. Companies need to document and present findings related to side effects.'
        column='methodology'
      />

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Ensure that the algorithm meets relevant regulatory requirements and ethical guidelines.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Ensure that the algorithm complies with relevant regulatory requirements and ethical guidelines. Companies must provide documentation of their compliance measures. References to GDPR, HIIPA, MDR, FDA, ISO 13485 and others.'
        column='methodology'
      />

      <IndicationColumn label='Level of Evidence' />
      <IndicationValue
        content='Level of evidence for AI development, Level of evidence for AI validation'
        column='evaluation_description'
      />
      <IndicationValue
        content='Appropriate documentation and evidence to facilitate the certification process.'
        column='methodology'
      />
    </div>
  );
};


const CriteriaTableForFemTechAndMaleTech = () => {
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

      <IndicationColumn label='Healthcare Gap Relevance' />
      <IndicationValue
        content='The extent to which an intervention effectively addresses and mitigates disparities in healthcare access, quality, and outcomes. Ensure the intervention contributes to closing the healthcare gaps that exist due to gender-related factors.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Assess the extent to which an intervention effectively addresses and mitigates disparities in healthcare access, quality, and outcomes. Companies must demonstrate how their intervention contributes to closing healthcare gaps that exist due to gender-related factors. This includes providing evidence that the intervention improves equitable access to healthcare services, enhances the quality of care, and leads to better health outcomes for all genders. Companies should document the specific strategies and measures they have implemented to address these disparities and provide data showing the impact of their intervention on reducing gender-based healthcare inequalities.'
        column='methodology'
      />

      <IndicationColumn label='Efficacy/ Accuracy' />
      <IndicationValue
        content='Gender-segregated data for efficacy.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Companies must provide evidence showing the effectiveness of their application for different genders, demonstrating that it performs well across these groups.'
        column='methodology'
      />

      <IndicationColumn label='Accessibility' />
      <IndicationValue
        content={`Accessibility of UI Design, Content, Documentation and Help. Compliance with Accessibility Standards`}
        column='evaluation_description'
      />
      <IndicationValue
        content={`Ensure all users, including those with disabilities, can effectively perceive, understand, navigate, and interact with the application. Compliance with requirements and guidelines on useability for example ISO/IEC 62366, ISO 9241 or FDA.`}
        column='methodology'
      />

      <IndicationColumn label='Affordability' />
      <IndicationValue
        content={`Costs associated with the application for Users, Healthcare Professionals and Organizations.`}
        column='evaluation_description'
      />
      <IndicationValue
        content={`Describe the cost model associated with the application for users, healthcare professionals, and organizations. Companies must provide information, contact or reference.`}
        column='methodology'
      />

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Evidence of any possible side effects or absences of them.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Provide evidence of any possible side effects or the absence thereof. Companies need to document and present findings related to side effects.'
        column='methodology'
      />

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Ensure that the application meets relevant regulatory requirements and ethical guidelines.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Ensure that the application complies with relevant regulatory requirements and ethical guidelines. Companies must provide documentation of their compliance measures. References to GDPR, HIIPA, MDR, FDA, ISO 13485 and others'
        column='methodology'
      />

      <IndicationColumn label='Level of Evidence' />
      <IndicationValue
        content='Level of evidence for application development, Level of evidence for application validations'
        column='evaluation_description'
      />
      <IndicationValue
        content='Each criterion should be supported with appropriate documentation and evidence to facilitate the certification process.'
        column='methodology'
      />
    </div>
  );
};

const CriteriaTableForDigitalPrevention = () => {
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

      <IndicationColumn label='Healthcare Gap Relevance' />
      <IndicationValue
        content='The extent to which an intervention effectively addresses and mitigates disparities in healthcare access, quality, and outcomes. Ensure the intervention contributes to closing the healthcare gaps that exist due to gender-related factors.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Assess the extent to which an intervention effectively addresses and mitigates disparities in healthcare access, quality, and outcomes. Companies must demonstrate how their intervention contributes to closing healthcare gaps that exist due to gender-related factors. This includes providing evidence that the intervention improves equitable access to healthcare services, enhances the quality of care, and leads to better health outcomes for all genders. Companies should document the specific strategies and measures they have implemented to address these disparities and provide data showing the impact of their intervention on reducing gender-based healthcare inequalities.'
        column='methodology'
      />

      <IndicationColumn label='Efficacy/ Accuracy' />
      <IndicationValue
        content='Gender-segregated data for efficacy.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Companies must provide evidence showing the effectiveness of their application for different genders, demonstrating that it performs well across these groups.'
        column='methodology'
      />

      <IndicationColumn label='Accessibility' />
      <IndicationValue
        content={`Accessibility of UI Design, Content, Documentation and Help. Compliance with Accessibility Standards`}
        column='evaluation_description'
      />
      <IndicationValue
        content={`Ensure all users, including those with disabilities, can effectively perceive, understand, navigate, and interact with the application. Compliance with requirements and guidelines on useability for example ISO/IEC 62366, ISO 9241 or FDA.`}
        column='methodology'
      />

      <IndicationColumn label='Affordability' />
      <IndicationValue
        content={`Costs associated with the application for Users, Healthcare Professionals and Organizations.`}
        column='evaluation_description'
      />
      <IndicationValue
        content={`Describe the cost model associated with the application for users, healthcare professionals, and organizations. Companies must provide information, contact or reference.`}
        column='methodology'
      />

      <IndicationColumn label='Possible Side Effects' />
      <IndicationValue
        content='Evidence of any possible side effects or absences of them.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Provide evidence of any possible side effects or the absence thereof. Companies need to document and present findings related to side effects.'
        column='methodology'
      />

      <IndicationColumn label='Regulatory Compliance' />
      <IndicationValue
        content='Ensure that the application meets relevant regulatory requirements and ethical guidelines.'
        column='evaluation_description'
      />
      <IndicationValue
        content='Ensure that the application complies with relevant regulatory requirements and ethical guidelines. Companies must provide documentation of their compliance measures. References to GDPR, HIIPA, MDR, FDA, ISO 13485 and others'
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
