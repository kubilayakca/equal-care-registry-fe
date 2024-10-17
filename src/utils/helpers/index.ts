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
