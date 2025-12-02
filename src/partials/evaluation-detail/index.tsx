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
import { type EvaluationData } from '@/utils/network/evaluations';

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
}: {
    evaluationData: EvaluationData;
    slug: string;
}) => {
    const { general_info, indications } = evaluationData.evaluation;
    const t = useTranslations();

    // Parse percentage strings to numbers for display
    const parsePercentage = (str: string): number => {
        const match = str.match(/(\d+\.?\d*)/);
        return match ? parseFloat(match[1]) : 0;
    };

    // Transform indication data to match Details component format
    const transformedIndications: TransformedIndication[] = indications.map((indication: EvaluationData['evaluation']['indications'][0]) => {
        const indicationRows: IndicationRow[] = [
            {
                column: { label: 'prevalence', tooltip: 'prevalence_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'number' as const,
                        value: parsePercentage(indication.men.prevalence_in_population),
                        align: 'right' as const,
                        bg: 'light' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'number' as const,
                        value: parsePercentage(indication.women.prevalence_in_population),
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            },
            {
                column: { label: 'gender_distribution', tooltip: 'gender_distribution_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'number' as const,
                        value: parsePercentage(indication.men.gender_distribution),
                        align: 'right' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'number' as const,
                        value: parsePercentage(indication.women.gender_distribution),
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            },
            {
                column: { label: 'clinical_study_participation', tooltip: 'clinical_study_participation_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'text' as const,
                        content: indication.men.clinical_study_participation,
                        align: 'left' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'text' as const,
                        content: indication.women.clinical_study_participation,
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            },
            {
                column: { label: 'representation_gap', tooltip: 'representation_gap_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'text' as const,
                        content: `Representation gap: ${indication.men.representation_gap}`,
                        align: 'left' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'text' as const,
                        content: `Representation gap: ${indication.women.representation_gap}`,
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            },
            {
                column: { label: 'efficacy/accuracy', tooltip: 'efficacy/accuracy_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'text' as const,
                        content: indication.men.efficacy,
                        align: 'left' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'text' as const,
                        content: indication.women.efficacy,
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            },
            {
                column: { label: 'posology', tooltip: 'posology_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'text' as const,
                        content: indication.men.posology,
                        align: 'left' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'text' as const,
                        content: indication.women.posology,
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            },
            {
                column: { label: 'dose_adjustments', tooltip: 'dose_adjustments_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'text' as const,
                        content: indication.men.dose_adjustments,
                        align: 'left' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'text' as const,
                        content: indication.women.dose_adjustments,
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            },
            {
                column: { label: 'difference_in_possible_side_effects', tooltip: 'difference_in_possible_side_effects_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'text' as const,
                        content: indication.men.difference_in_possible_side_effects,
                        align: 'left' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'text' as const,
                        content: indication.women.difference_in_possible_side_effects,
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            },
        ];

        // Add pregnancy_lactation if not null
        if (indication.men.pregnancy_lactation !== null || indication.women.pregnancy_lactation !== null) {
            indicationRows.push({
                column: { label: 'pregnancy_lactation', tooltip: 'pregnancy_lactation_tooltip' },
                values: [
                    {
                        column: 'men' as const,
                        type: 'text' as const,
                        content: indication.men.pregnancy_lactation || 'Not applicable',
                        align: 'left' as const,
                    },
                    {
                        column: 'women' as const,
                        type: 'text' as const,
                        content: indication.women.pregnancy_lactation || 'Not applicable',
                        align: 'left' as const,
                        bg: 'dark' as const,
                    },
                ],
            });
        }

        // Add sex_gender_specific_nonclinical_findings
        indicationRows.push({
            column: { label: 'sex_gender_specific_nonclinical_findings', tooltip: 'sex_gender_specific_nonclinical_findings_tooltip' },
            values: [
                {
                    column: 'men' as const,
                    type: 'text' as const,
                    content: indication.men.sex_gender_specific_nonclinical_findings,
                    align: 'left' as const,
                },
                {
                    column: 'women' as const,
                    type: 'text' as const,
                    content: indication.women.sex_gender_specific_nonclinical_findings,
                    align: 'left' as const,
                    bg: 'dark' as const,
                },
            ],
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
        name: general_info.source,
        url: general_info.source_url,
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
                                <div className='heading-04-500 text-blue-2'>{general_info.certification_item}</div>
                                <div className='body-m-400 text-blue-85'>{general_info.description}</div>
                            </div>
                            <div className='bg-blue-20 mt-6 mb-4 h-px' />
                            <div className='grid grid-cols-[max-content,_auto] md:grid-cols-[minmax(max-content,_auto),_auto] lg:grid-cols-[minmax(12.5rem,_max-content),_auto] gap-5 lg:gap-4'>
                                <div className='body-l-500 text-blue-2'>{t('source')}:</div>
                                <div className='text-blue-85 body-m-400'>{general_info.source}</div>
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
                            {representationGap && (
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
                    <div className='w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center'>
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

