import { MutableRefObject, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  AccordionItem,
  ControlledAccordion,
  useAccordionProvider,
} from '@szhsin/react-accordion';
import { Icon } from '@/components/icon';
import Image from 'next/image';
import useOnClickOutside from '@/utils/hooks/use-on-click-outside';

export const CountrySelector = () => {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);

  const [selectedCountry, setSelectedCountry] = useState<'de' | 'global'>('de');

  const providerValue = useAccordionProvider({
    allowMultiple: true,
    transition: true,
    transitionTimeout: 250,
  });

  const { toggle } = providerValue;

  useOnClickOutside(
    ref as MutableRefObject<HTMLDivElement>,
    () => {
      toggle('country-selector', false);
    },
    { exclude: { class: 'dp-modal' } }
  );

  return (
    <div>
      <ControlledAccordion providerValue={providerValue}>
        <AccordionItem
          ref={ref}
          itemKey='country-selector'
          className='relative'
          buttonProps={{
            className:
              'border border-green-400 px-5 py-3 rounded body-s-550 text-blue-2 bg-white',
          }}
          contentProps={{
            style: {
              position: 'absolute',
              right: 0,
              minWidth: '100%',
              transition: 'height 0.25s cubic-bezier(0, 0, 0, 1)',
              boxShadow:
                '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
            },
          }}
          header={({ state }) => (
            <div className='flex items-center'>
              <Image
                src={`/icons/flags-${selectedCountry}.svg`}
                alt=''
                width={22}
                height={16}
              />
              <div className='pl-2 pr-0.5'>
                {t(`countries.${selectedCountry}`)}
              </div>
              <Icon
                type={
                  state.status === 'entered' || state.status === 'entering'
                    ? 'chevron-up'
                    : 'chevron-down'
                }
                size='xs'
              />
            </div>
          )}
        >
          <div className='flex flex-col py-1.5 divide-y divide-gray-50 rounded bg-white'>
            {['de', 'global'].map((country) => {
              return (
                <div
                  key={country}
                  className='flex items-center gap-2 px-5 py-2.5'
                >
                  <Image
                    src={`/icons/flags-${country}.svg`}
                    alt=''
                    width={22}
                    height={16}
                  />
                  <div>{t(`countries.${country}`)}</div>
                </div>
              );
            })}
            <div className='px-5 py-2.5 body-s-400 text-blue-60 whitespace-nowrap'>
              {t('more_countries_coming_soon')}
            </div>
          </div>
        </AccordionItem>
      </ControlledAccordion>
    </div>
  );
};
