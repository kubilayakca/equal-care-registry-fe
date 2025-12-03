'use client';

import { MutableRefObject, useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  AccordionItem,
  ControlledAccordion,
  useAccordionProvider,
} from '@szhsin/react-accordion';
import { Icon } from '@/components/icon';
import useOnClickOutside from '@/utils/hooks/use-on-click-outside';
import useDebounce from '@/utils/hooks/use-debounce';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const t = useTranslations();
  const [localValue, setLocalValue] = useState(value);
  const debouncedValue = useDebounce(localValue, 300);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className='relative flex-1'>
      <input
        type='text'
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={t('search_by_inn') || 'Search by INN...'}
        className='w-full border border-green-400 px-5 py-3 rounded body-s-550 text-blue-2 bg-white placeholder:text-blue-60 focus:outline-none focus:ring-2 focus:ring-green-400'
      />
      {localValue && (
        <button
          onClick={() => {
            setLocalValue('');
            onChange('');
          }}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-blue-60 hover:text-blue-2'
          aria-label='Clear search'
        >
          <Icon type='close-large' size='small' />
        </button>
      )}
    </div>
  );
};

interface DropdownProps {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
  itemKey: string;
  disabled?: boolean;
}

const Dropdown = ({ value, options, placeholder, onChange, itemKey, disabled }: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  const providerValue = useAccordionProvider({
    allowMultiple: true,
    transition: true,
    transitionTimeout: 250,
  });

  const { toggle } = providerValue;

  useOnClickOutside(
    ref as MutableRefObject<HTMLDivElement>,
    () => {
      if (!disabled) {
        toggle(itemKey, false);
      }
    },
    { exclude: { class: 'dp-modal' } }
  );

  const handleSelect = (option: string) => {
    if (disabled) return;
    onChange(option === value ? '' : option);
    toggle(itemKey, false);
  };

  return (
    <div ref={ref}>
      <ControlledAccordion providerValue={providerValue}>
        <AccordionItem
          itemKey={itemKey}
          className='relative'
          buttonProps={{
            className:
              `border border-green-400 px-5 py-3 rounded body-s-550 text-blue-2 bg-white min-w-[12rem] text-left ${
                disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
              }`,
          }}
          contentProps={{
            style: {
              position: 'absolute',
              left: 0,
              right: 0,
              minWidth: '100%',
              transition: 'height 0.25s cubic-bezier(0, 0, 0, 1)',
              boxShadow:
                '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              zIndex: 50,
            },
          }}
          header={({ state }) => (
            <div className='flex items-center justify-between'>
              <span className={value ? 'text-blue-2' : 'text-blue-60'}>
                {value || placeholder}
              </span>
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
          <div className='flex flex-col py-1.5 divide-y divide-gray-50 rounded bg-white max-h-[20rem] overflow-y-auto'>
            {options.length === 0 ? (
              <div className='px-5 py-2.5 body-s-400 text-blue-60'>
                {t('no_options_available') || 'No options available'}
              </div>
            ) : (
              options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-5 py-2.5 text-left hover:bg-blue-4 transition-colors ${
                    value === option ? 'bg-blue-4 text-green-500' : 'text-blue-2'
                  }`}
                >
                  {option}
                </button>
              ))
            )}
          </div>
        </AccordionItem>
      </ControlledAccordion>
    </div>
  );
};

interface TherapeuticAreaDropdownProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export const TherapeuticAreaDropdown = ({
  value,
  options,
  onChange,
}: TherapeuticAreaDropdownProps) => {
  const t = useTranslations();
  return (
    <Dropdown
      value={value}
      options={options}
      placeholder={t('therapeutic_area') || 'Therapeutic Area'}
      onChange={onChange}
      itemKey='therapeutic-area-dropdown'
    />
  );
};

interface ConditionDropdownProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const ConditionDropdown = ({
  value,
  options,
  onChange,
  disabled,
}: ConditionDropdownProps) => {
  const t = useTranslations();
  return (
    <Dropdown
      value={value}
      options={options}
      placeholder={disabled ? (t('select_therapeutic_area_first') || 'Select therapeutic area first') : (t('condition') || 'Condition')}
      onChange={onChange}
      itemKey='condition-dropdown'
      disabled={disabled}
    />
  );
};

interface SourceDropdownProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export const SourceDropdown = ({ value, options, onChange }: SourceDropdownProps) => {
  const t = useTranslations();
  return (
    <Dropdown
      value={value}
      options={options}
      placeholder={t('source') || 'Source'}
      onChange={onChange}
      itemKey='source-dropdown'
    />
  );
};

