import { getPathname } from '@/navigation';
import { format } from 'date-fns';
import en from 'date-fns/locale/en-US';
import tr from 'date-fns/locale/tr';
import tolower from 'lodash.tolower';
import upperfirst from 'lodash.upperfirst';

export const noop = () => {};

export const localizedFormat = (
  date: Date,
  formatStr: string,
  locale: string
) => {
  return format(date, formatStr, { locale: locale === 'tr' ? tr : en });
};

export const getCustomHref = (currentLocale: 'tr' | 'en', href: string) => {
  const localePrefix = currentLocale === 'tr' ? '' : currentLocale;

  return `${process.env.NEXT_PUBLIC_SITE_URL}${
    localePrefix ? `/${localePrefix}` : ''
  }${href === '/' ? '' : getPathname({ href, locale: currentLocale })}`;
};

export const toTitleCase = (str: string) => {
  return str
    .split(' ')
    .map((s) => upperfirst(tolower(s)))
    .join(' ');
};

/**
 * Formats INN name by replacing hyphens with semicolons and capitalizing the first letter of each word.
 * Preserves spaces in the original input.
 * Example: "aclidinium-formoterol fumarate-dihydrate" -> "Aclidinium; Formoterol fumarate; Dihydrate"
 */
export const formatInnName = (inn: string): string => {
  // Split by spaces to preserve word groups
  return inn
    .split(' ')
    .map((group) => {
      // For each group, replace hyphens with semicolons and capitalize each word
      return group
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('; ');
    })
    .join(' ');
};
