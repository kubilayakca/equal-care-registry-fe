import { getPathname } from '@/navigation';
import { format } from 'date-fns';
import en from 'date-fns/locale/en-US';
import tr from 'date-fns/locale/tr';
import tolower from 'lodash.tolower';
import upperfirst from 'lodash.upperfirst';

export const noop = () => { };

export const localizedFormat = (
  date: Date,
  formatStr: string,
  locale: string
) => {
  return format(date, formatStr, { locale: locale === 'tr' ? tr : en });
};

export const getCustomHref = (currentLocale: 'tr' | 'en', href: string) => {
  const localePrefix = currentLocale === 'tr' ? '' : currentLocale;

  return `${process.env.NEXT_PUBLIC_SITE_URL}${localePrefix ? `/${localePrefix}` : ''
    }${href === '/' ? '' : getPathname({ href, locale: currentLocale })}`;
};

export const toTitleCase = (str: string) => {
  return str
    .split(' ')
    .map((s) => upperfirst(tolower(s)))
    .join(' ');
};

/**
 * Formats INN name by replacing hyphens with semicolons and capitalizing appropriately.
 * Handles both formats: with spaces and all hyphens.
 * 
 * Rules:
 * - Hyphenated parts: capitalize each word and join with semicolons
 * - Space-separated words after hyphenated parts: capitalize first word, keep rest lowercase, join with spaces
 * - If all hyphens and last 2 words are salt forms: format last 2 as space-separated lowercase (except first letter of first)
 * 
 * Examples:
 * - "aclidinium-formoterol fumarate dihydrate" -> "Aclidinium; Formoterol Fumarate dihydrate"
 * - "beclometasone-formoterol-glycopyrronium bromide" -> "Beclometasone; Formoterol; Glycopyrronium Bromide"
 * - "aclidinium-formoterol-fumarate-dihydrate" -> "Aclidinium; Formoterol Fumarate dihydrate"
 */
export const formatInnName = (inn: string): string => {
  if (!inn) return '';

  // Common salt form words
  const saltForms = ['fumarate', 'dihydrate', 'bromide', 'chloride', 'sulfate', 'acetate', 'citrate', 'tartrate'];

  // Check if input has spaces
  if (inn.includes(' ')) {
    // Split by spaces to preserve word groups
    const spaceParts = inn.split(' ').filter(part => part.length > 0);
    const result: string[] = [];
    let foundHyphenatedPart = false;

    spaceParts.forEach((part, index) => {
      if (part.includes('-')) {
        foundHyphenatedPart = true;
        // Hyphenated part: capitalize each word and join with semicolons
        const formatted = part
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join('; ');
        result.push(formatted);
      } else {
        // Space-separated word after hyphenated part(s)
        if (foundHyphenatedPart) {
          // First word after hyphenated part: capitalize
          // Subsequent words: lowercase
          const firstNonHyphenIndex = spaceParts.findIndex(p => !p.includes('-'));
          if (index === firstNonHyphenIndex) {
            result.push(part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
          } else {
            result.push(part.toLowerCase());
          }
        } else {
          // No hyphenated parts found, capitalize first word only
          if (index === 0) {
            result.push(part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
          } else {
            result.push(part.toLowerCase());
          }
        }
      }
    });

    return result.join(' ');
  } else {
    // No spaces - all hyphens
    const words = inn.split('-');

    // Check if last two words are salt forms
    if (words.length >= 2) {
      const lastWord = words[words.length - 1].toLowerCase();
      const secondLastWord = words[words.length - 2].toLowerCase();

      if (saltForms.includes(lastWord) && saltForms.includes(secondLastWord)) {
        // Last two are salt forms: format main part with semicolons, salt part with space
        const mainPart = words.slice(0, -2)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join('; ');
        const saltPart = words.slice(-2)
          .map((word, idx) => idx === 0
            ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            : word.toLowerCase())
          .join(' ');
        return `${mainPart}; ${saltPart}`;
      }
    }

    // Default: capitalize all and join with semicolons
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('; ');
  }
};
