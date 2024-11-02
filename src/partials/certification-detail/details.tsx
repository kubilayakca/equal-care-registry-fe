'use client';

import { useTranslations } from 'next-intl';
import {
  AccordionItemProps,
  ControlledAccordion,
  AccordionItem as Item,
  useAccordionProvider,
} from '@szhsin/react-accordion';
import { Icon } from '@/components/icon';
import { InfoTooltip } from '../info-tooltip';
import { SectionHeader } from '@/components/section-header';
import { TargetGender } from '@/utils/constants';

export const Details = ({
  certificate,
}: {
  certificate: any;
}) => {
  const t = useTranslations();
  const providerValue = useAccordionProvider({
    allowMultiple: true,
    transition: true,
    transitionTimeout: 250,
  });

  return (
    <div className='w-full bg-white rounded-xl py-8 '>
      <SectionHeader label={t('indications')} className='mx-6' />
      <ControlledAccordion
        // Forward the `providerValue` directly to `ControlledAccordion`
        providerValue={providerValue}
      >
        {certificate.indications.map((indication:any, i: number) => {
          return (
            <AccordionItem
              key={i}
              header={t(indication.title)}
              initialEntered={i === 0}
              number={i + 1}
            >
              {/* <div className='pl-4 md:pl-10 py-2.5 body-m-400 text-blue-85 px-6'>
                <span className='text-blue-2'>{t('description')}: </span>
                {t(indication.description)}
              </div> */}
              <div className='pl-4 md:pl-10 px-4 md:px-6 pt-5 pb-10 lg:pl-[3.75rem] grid grid-cols-[max-content,_1fr] lg:grid-cols-[max-content,_1fr,_1fr]'>
                <div className='pr-10 max-lg:hidden' />
                
                {
                  certificate.targetGender === 'both' && (
                    <div className='max-lg:hidden bg-blue-1 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tl-lg'>
                      {t('men')}
                    </div> 
                )}
                
                <div className={`max-lg:hidden bg-blue-2 h-[3.75rem] flex items-center justify-center text-white body-m-500 rounded-tr-lg ${ certificate.targetGender === TargetGender.FEMALE ? 'lg:col-span-2' : null }`}>
                  {t('women')}
                </div>

                {
                  indication.indicationRows.map((row:any, i:number) => {
                    return (
                      <>
                        <IndicationColumn
                          key={i}
                          label={t(row.column.label)}
                          tooltip={t(row.column.tooltip)}
                        />
                        {
                          row.values.map((val:any, j:number) => {
                            return (
                              <IndicationValue
                                key={j}
                                column={val.column as any}
                                type={val.type as any}
                                value={val.value as any}
                                content={val.content as any}
                                bg={val.bg as any}
                                align={val.align as any}
                                representationGap={val.representationGap as any}
                                alignContent={val.alignContent as any}
                              />
                            )
                          })
                        } 
                      </>
                    )
                  })
                }
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
  const t = useTranslations();

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
  representationGap?: number
  alignContent?: 'center';
}) => {
  const t = useTranslations();

  return (
    <>
      <div
        className={`lg:hidden h-full min-h-[3.75rem] flex items-center justify-center text-white body-m-500 min-w-[7.5rem] ${
          column === 'men' ? 'bg-blue-1' : 'bg-blue-2'
        }`}
      >
        {t(column)}
      </div>

      <div
        className={`border-b border-r border-gray-100 flex bg-green-50 
          ${
            column === 'both' ? 'lg:col-span-2' : 'lg:col-span-1'
          }
          ${
          type === 'number' ? 'py-2.5' : 'py-3 px-4'
        } ${column === 'men' ? 'max-lg:border-t' : ''}
          ${alignContent === 'center' ? 'justify-center' : ''}  
        `}
      >
        {type === 'number' && value && (
          <div  className='w-full'>
            <div className='w-full'>
                <div
                  className={`body-m-400 text-blue-85 text-white h-10 flex items-center justify-center ${
                    bg === 'light' ? 'bg-green-500' : 'bg-green-800'
                  } ${align === 'right' ? 'ml-auto' : 'max-lg:ml-auto'}`}
                  style={{
                    width: `${value}%`,
                    minWidth: '3rem',
                  }}
                >
                  {value}%
                </div>
                
            {representationGap && (
              <div className={`flex ${align === 'left' ?  'lg:flex-row-reverse' : ''}`}>
                <div className={`text-blue-85 m-2 flex 
                   ${align === 'left' ? 'max-lg:ml-auto lg:mr-auto' : 'ml-auto'}
                  `}>
                  Representation Gap
                </div>
                <div
                  className={`body-m-400 text-blue-85 text-white h-10 flex items-center justify-center bg-gray-500 
                  `}
                  style={{
                  width: `${(Math.abs(representationGap))}%`,
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
          <div
            className='body-m-400 text-blue-85'
            dangerouslySetInnerHTML={{ __html: content }}
          />
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
}: AccordionItemProps & { number: number }) => (
  <Item
    {...rest}
    header={({ state }) => (
      <div className='flex gap-4 w-full items-center text-left'>
        <div className='w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center'>
          {number}
        </div>
        {header as any}
        <div className='ml-auto'>
          <div className='text-blue-2 border border-green-400 rounded h-9 w-11 flex items-center justify-center'>
            <Icon
              type={
                state.status === 'entered' || state.status === 'entering'
                  ? 'subtract-large'
                  : 'add-large'
              }
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
