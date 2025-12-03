'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ICON_MAPPING, CERTIFICATION_TYPES } from '@/utils/constants';
import { Chip } from '@/components/chip';
import { Badge } from '../certification-detail/badge';
import { Source } from '../certification-detail/source';
import Image from 'next/image';
import {
    AccordionItemProps,
    ControlledAccordion,
    AccordionItem as Item,
    useAccordionProvider,
} from '@szhsin/react-accordion';
import { Icon } from '@/components/icon';
import { InfoTooltip } from '../info-tooltip';
import { SectionHeader } from '@/components/section-header';
import { type EvaluationData, type InnIndexBrandDoc } from '@/utils/network/evaluations';
import { formatInnName } from '@/utils/helpers';

type IndicationValue = {
    column: 'men' | 'women' | 'both';
    type: 'text' | 'number';
    value?: number;
    content?: string;
    bg?: 'light' | 'dark';
    align?: 'left' | 'right';
    representationGap?: number;
    alignContent?: 'center';
};

type IndicationRow = {
    column: { label: string; tooltip: string };
    values: IndicationValue[];
};

type TransformedIndication = {
    title: string;
    description: string;
    indicationRows: IndicationRow[];
};

export const EvaluationDetail = ({
    evaluationData,
    slug,
    brandDoc,
}: {
    evaluationData: EvaluationData;
    slug: string;
    brandDoc: InnIndexBrandDoc;
}) => {
    const { general_info, indications } = evaluationData.evaluation;
    const t = useTranslations();

    // Parse percentage strings to numbers for display
    const parsePercentage = (str: string | null | undefined): number => {
        if (!str) return 0;
        const match = str.match(/(\d+\.?\d*)/);
        return match ? parseFloat(match[1]) : 0;
    };

    // Parse representation gap string to number (handles negative/positive signs)
    const parseRepresentationGap = (str: string | null | undefined): number => {
        if (!str) return 0;
        // Match optional sign (- or +) followed by number
        const match = str.match(/([+-]?)(\d+\.?\d*)/);
        if (match) {
            const sign = match[1] === '-' ? -1 : 1;
            return sign * parseFloat(match[2]);
        }
        return 0;
    };

    // Helper function to create text field values - combines columns if values are the same
    const createTextFieldValues = (menValue: string | null, womenValue: string | null): IndicationValue[] => {
        const menContent = menValue || '';
        const womenContent = womenValue || '';

        // If values are the same, combine into a single 'both' column
        if (menContent === womenContent) {
            return [
                {
                    column: 'both' as const,
                    type: 'text' as const,
                    content: menContent,
                    align: 'left' as const,
                },
            ];
        }

        // Otherwise, show separate columns
        return [
            {
                column: 'men' as const,
                type: 'text' as const,
                content: menContent,
                align: 'left' as const,
            },
            {
                column: 'women' as const,
                type: 'text' as const,
                content: womenContent,
                align: 'left' as const,
                bg: 'dark' as const,
            },
        ];
    };

    // Helper function to check if both number values are zero
    const areBothValuesZero = (menValue: number, womenValue: number): boolean => {
        return menValue === 0 && womenValue === 0;
    };

    // Transform indication data to match Details component format
    const transformedIndications: TransformedIndication[] = indications.map((indication: EvaluationData['evaluation']['indications'][0]) => {
        const indicationRows: IndicationRow[] = [];

        // Gender Distribution - only add if not both zero
        const genderDistMen = parsePercentage(indication.men.gender_distribution);
        const genderDistWomen = parsePercentage(indication.women.gender_distribution);
        if (!areBothValuesZero(genderDistMen, genderDistWomen)) {
            indicationRows.push({
                column: { label: 'gender_distribution', tooltip: 'gender_distribution_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'number' as const,
                        value: genderDistMen,
                        align: 'right' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'number' as const,
                        value: genderDistWomen,
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            });
        }

        // Clinical Study Participation - only add if not both zero
        const clinicalStudyMen = parsePercentage(indication.men.clinical_study_participation);
        const clinicalStudyWomen = parsePercentage(indication.women.clinical_study_participation);
        if (!areBothValuesZero(clinicalStudyMen, clinicalStudyWomen)) {
            const womenValue: IndicationValue = {
                column: 'women' as const,
                type: 'number' as const,
                value: clinicalStudyWomen,
                align: 'left' as const,
                bg: 'dark' as const,
            };

            // Only add representation gap if there's actual data
            const representationGapValue = parseRepresentationGap(indication.women.representation_gap);
            if (indication.women.representation_gap && representationGapValue !== 0) {
                womenValue.representationGap = representationGapValue;
            }

            indicationRows.push({
                column: { label: 'clinical_study_participation', tooltip: 'clinical_study_participation_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'number' as const,
                        value: clinicalStudyMen,
                        align: 'right' as const,
                    },
                    womenValue,
                ],
            });
        }

        // Add text fields
        indicationRows.push({
            column: { label: 'efficacy/accuracy', tooltip: 'efficacy/accuracy_tooltip' },
            values: createTextFieldValues(indication.men.efficacy, indication.women.efficacy),
        });
        indicationRows.push({
            column: { label: 'posology', tooltip: 'posology_tooltip' },
            values: createTextFieldValues(indication.men.posology, indication.women.posology),
        });
        indicationRows.push({
            column: { label: 'dose_adjustments', tooltip: 'dose_adjustments_tooltip' },
            values: createTextFieldValues(indication.men.dose_adjustments, indication.women.dose_adjustments),
        });
        indicationRows.push({
            column: { label: 'difference_in_possible_side_effects', tooltip: 'difference_in_possible_side_effects_tooltip' },
            values: createTextFieldValues(indication.men.difference_in_possible_side_effects, indication.women.difference_in_possible_side_effects),
        });

        // Add pregnancy_lactation if not null
        if (indication.men.pregnancy_lactation !== null || indication.women.pregnancy_lactation !== null) {
            indicationRows.push({
                column: { label: 'pregnancy_lactation', tooltip: 'pregnancy_lactation_tooltip' },
                values: createTextFieldValues(
                    indication.men.pregnancy_lactation || 'Not applicable',
                    indication.women.pregnancy_lactation || 'Not applicable'
                ),
            });
        }

        // Add sex_gender_specific_nonclinical_findings
        indicationRows.push({
            column: { label: 'sex_gender_specific_nonclinical_findings', tooltip: 'sex_gender_specific_nonclinical_findings_tooltip' },
            values: createTextFieldValues(
                indication.men.sex_gender_specific_nonclinical_findings,
                indication.women.sex_gender_specific_nonclinical_findings
            ),
        });

        // Add possible_side_effects
        indicationRows.push({
            column: { label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip' },
            values: [
                {
                    column: 'both' as const,
                    type: 'text' as const,
                    content: indication.possible_side_effects.join(', '),
                    align: 'left' as const,
                },
            ],
        });

        return {
            title: indication.indication_name,
            description: indication.indication_name,
            indicationRows,
        };
    });

    const sourceData = {
        name: brandDoc.source,
        url: brandDoc.sourceUrl || null,
        prevalence_source: indications[0]?.prevalence_source || null,
    };

    return (
        <div className='lg:px-5 bg-blue-4'>
            <div className='eq-container mt-[3.75rem] mb-5'>
                <div className='flex flex-col gap-5'>
                    {/* Header Card */}
                    <div className='bg-white px-4 lg:px-6 py-8 lg:rounded-xl flex max-lg:flex-col gap-6 lg:gap-12'>
                        <div className='w-32 h-32 rounded-lg border border-gray-100 shrink-0 flex items-center justify-center'>
                            <Image
                                src={ICON_MAPPING[CERTIFICATION_TYPES.medication]}
                                alt=''
                                width={64}
                                height={64}
                                sizes='100vw'
                            />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <div className='flex flex-col gap-3'>
                                <div className='heading-04-500 text-blue-2'>{formatInnName(general_info.certification_item)}</div>
                                <div className='body-m-400 text-blue-85'>{general_info.description}</div>
                            </div>
                            <div className='bg-blue-20 mt-6 mb-4 h-px' />
                            <div className='grid grid-cols-[max-content,_auto] md:grid-cols-[minmax(max-content,_auto),_auto] lg:grid-cols-[minmax(12.5rem,_max-content),_auto] gap-5 lg:gap-4'>
                                <div className='body-l-500 text-blue-2'>{t('source')}:</div>
                                <div className='text-blue-85 body-m-400'>{brandDoc.source}</div>
                                {general_info.active_ingredient && (
                                    <>
                                        <div className='body-l-500 text-blue-2'>{t('active_ingredients')}:</div>
                                        <div className='flex gap-2 flex-wrap'>
                                            <Chip icon='ingredient'>{general_info.active_ingredient}</Chip>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Details */}
                    <EvaluationDetails indications={transformedIndications} />

                    {/* Badge and Source */}
                    <div className='flex max-md:flex-col gap-5'>
                        <Badge type={CERTIFICATION_TYPES.medication} isEvaluation={true} />
                        <Source source={sourceData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const EvaluationDetails = ({ indications }: { indications: TransformedIndication[] }) => {
    const t = useTranslations();
    const providerValue = useAccordionProvider({
        allowMultiple: true,
        transition: true,
        transitionTimeout: 250,
    });

    return (
        <div className='w-full bg-white rounded-xl py-8'>
            <SectionHeader label={t('indications')} className='mx-6' />
            <ControlledAccordion providerValue={providerValue}>
                {indications.map((indication, i) => {
                    return (
                        <AccordionItem
                            key={i}
                            header={indication.title}
                            initialEntered={i === 0}
                            number={i + 1}
                        >
                            <div className='pl-4 md:pl-10 px-4 md:px-6 pt-5 pb-10 lg:pl-[3.75rem] grid grid-cols-[max-content,_1fr] lg:grid-cols-[max-content,_1fr,_1fr]'>
                                <div className='pr-10 max-lg:hidden' />
                                <div className='max-lg:hidden bg-blue-1 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tl-lg'>
                                    {t('men')}
                                </div>
                                <div className='max-lg:hidden bg-blue-2 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tr-lg'>
                                    {t('women')}
                                </div>
                                {indication.indicationRows.map((row, rowIndex) => {
                                    return (
                                        <React.Fragment key={rowIndex}>
                                            <IndicationColumn
                                                label={t(row.column.label)}
                                                tooltip={t(row.column.tooltip)}
                                            />
                                            {row.values.map((val, valIndex) => {
                                                return (
                                                    <IndicationValue
                                                        key={valIndex}
                                                        column={val.column}
                                                        type={val.type}
                                                        value={val.value}
                                                        content={val.content}
                                                        bg={val.bg}
                                                        align={val.align}
                                                        representationGap={val.representationGap}
                                                        alignContent={val.alignContent}
                                                    />
                                                );
                                            })}
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </AccordionItem>
                    );
                })}
            </ControlledAccordion>
        </div>
    );
};

const IndicationColumn = ({
    label,
    tooltip,
}: {
    label: string;
    tooltip: string;
}) => {
    return (
        <div className='py-6 pr-10 lg:py-3 lg:border-b lg:border-r lg:border-gray-100 max-lg:col-span-2'>
            <TooltipLabel label={label} tooltip={tooltip} />
        </div>
    );
};

const IndicationValue = ({
    type = 'text',
    content,
    value,
    bg = 'light',
    align = 'left',
    column,
    representationGap,
    alignContent,
}: {
    type?: 'text' | 'number';
    content?: string;
    value?: number;
    bg?: 'light' | 'dark';
    align?: 'left' | 'right';
    column: 'men' | 'women' | 'both';
    representationGap?: number;
    alignContent?: 'center';
}) => {
    const t = useTranslations();

    return (
        <>
            <div
                className={`lg:hidden h-full min-h-[3.75rem] flex items-center justify-center text-white body-m-500 min-w-[7.5rem] ${column === 'men' ? 'bg-blue-1' : 'bg-blue-2'
                    }`}
            >
                {t(column)}
            </div>
            <div
                className={`border-b border-r border-gray-100 flex bg-green-50 
          ${column === 'both' ? 'lg:col-span-2' : 'lg:col-span-1'}
          ${type === 'number' ? 'py-2.5' : 'py-3 px-4'} ${column === 'men' ? 'max-lg:border-t' : ''}
          ${alignContent === 'center' ? 'justify-center' : ''}  
        `}
            >
                {type === 'number' && value && (
                    <div className='w-full'>
                        <div className='w-full'>
                            <div
                                className={`body-m-400 text-blue-85 text-white h-10 flex items-center justify-center ${bg === 'light' ? 'bg-green-500' : 'bg-green-800'
                                    } ${align === 'right' ? 'ml-auto' : 'max-lg:ml-auto'}`}
                                style={{
                                    width: `${value}%`,
                                    minWidth: '3rem',
                                }}
                            >
                                {value}%
                            </div>
                            {representationGap !== undefined && representationGap !== null && representationGap !== 0 && (
                                <div className={`flex ${align === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                                    <div
                                        className={`text-blue-85 m-2 flex 
                   ${align === 'left' ? 'max-lg:ml-auto lg:mr-auto' : 'ml-auto'}
                  `}
                                    >
                                        Representation Gap
                                    </div>
                                    <div
                                        className={`body-m-400 text-blue-85 text-white h-10 flex items-center justify-center bg-gray-500 
                  `}
                                        style={{
                                            width: `${Math.abs(representationGap)}%`,
                                            minWidth: '2rem',
                                        }}
                                    >
                                        {representationGap}%
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {type === 'text' && content && (
                    <div className='body-m-400 text-blue-85' dangerouslySetInnerHTML={{ __html: content }} />
                )}
            </div>
        </>
    );
};

const TooltipLabel = ({
    label,
    tooltip,
}: {
    label: string;
    tooltip: string;
}) => {
    return (
        <div className='body-m-550 text-blue-2 flex items-center gap-2'>
            <div className='pt-0.5'>{label}</div>
            <div>
                <InfoTooltip text={tooltip} />
            </div>
        </div>
    );
};

const AccordionItem = ({
    header,
    number,
    ...rest
}: AccordionItemProps & { number: number; header: string | React.ReactNode }) => {
    return (
        <Item
            {...rest}
            header={({ state }) => (
                <div className='flex gap-4 w-full items-center text-left'>
                    <div className='w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center shrink-0'>
                        {number}
                    </div>
                    {header}
                    <div className='ml-auto'>
                        <div className='text-blue-2 border border-green-400 rounded h-9 w-11 flex items-center justify-center'>
                            <Icon
                                type={state.status === 'entered' || state.status === 'entering' ? 'subtract-large' : 'add-large'}
                                size='small'
                            />
                        </div>
                    </div>
                </div>
            )}
            headingProps={{
                className: 'body-l-400 text-blue-2',
            }}
            buttonProps={{
                className: 'w-full px-6 py-2 flex hover:bg-blue-4',
            }}
            contentProps={{
                style: {
                    transition: 'height 0.25s cubic-bezier(0, 0, 0, 1)',
                },
            }}
        />
    );
};

