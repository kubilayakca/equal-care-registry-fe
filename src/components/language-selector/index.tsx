import { MutableRefObject, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  AccordionItem,
  ControlledAccordion,
  useAccordionProvider,
} from '@szhsin/react-accordion';
import { Icon } from '@/components/icon';
import useOnClickOutside from '@/utils/hooks/use-on-click-outside';

export const LanguageSelector = () => {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);

  const [selectedLanguage, setSelectedLanguage] = useState<'en'>('en');

  const providerValue = useAccordionProvider({
    allowMultiple: true,
    transition: true,
    transitionTimeout: 250,
  });

  const { toggle } = providerValue;

  useOnClickOutside(
    ref as MutableRefObject<HTMLDivElement>,
    () => {
      toggle('language-selector', false);
    },
    { exclude: { class: 'dp-modal' } }
  );

  return (
    <div>
      <ControlledAccordion providerValue={providerValue}>
        <AccordionItem
          ref={ref}
          itemKey='language-selector'
          className='relative'
          buttonProps={{
            className:
              'border border-green-400 px-5 py-3 rounded body-s-550 text-blue-2 bg-white',
          }}
          contentProps={{
            style: {
              position: 'absolute',
              right: 0,
              minWidth: '12.5rem',
              transition: 'height 0.25s cubic-bezier(0, 0, 0, 1)',
              boxShadow:
                '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
            },
          }}
          header={({ state }) => (
            <div className='flex items-center'>
              <div className='pl-2 pr-0.5'>
                {t(`languageCodes.${selectedLanguage}`)}
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
            {['en'].map((country) => {
              return (
                <div
                  key={country}
                  className='flex justify-between gap-2 px-5 py-2.5'
                >
                  <div>{t(`languages.${selectedLanguage}`)}</div>
                  <div className='text-blue-60'>
                    {t(`languageCodes.${selectedLanguage}`)}
                  </div>
                </div>
              );
            })}
          </div>
        </AccordionItem>
      </ControlledAccordion>
    </div>
  );
};
