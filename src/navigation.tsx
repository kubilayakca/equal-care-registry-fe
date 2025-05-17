import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { LOCALES, ROUTES } from './utils/constants';
import { useLocale } from 'next-intl';

export const localePrefix = 'as-needed';

export const pathnames = {
  [ROUTES.root]: { en: '/' },
  [ROUTES.certificateTypeMedication]: { en: '/medication' },
  [ROUTES.certificateTypeDiagnosticTreatment]: { en: '/diagnostic-treatment' },
  [ROUTES.certificateTypeDigitalDiagnosticTreatment]: {
    en: '/digital-diagnostic-treatment',
  },
  [ROUTES.certificateTypeAiSupportedDiagnosticTreatment]: {
    en: '/ai-supported-diagnostic-treatment',
  },
  [ROUTES.certificateTypeFemaleTech]: { en: '/femtech' },
  [ROUTES.certificateTypeMaleTech]: { en: '/maletech' },
  [ROUTES.certificateTypeDigitalPrevention]: {
    en: '/digital-prevention',
  },

  [ROUTES.certificatePrevention]: { en: '/digital-prevention/[slug]' },
  [ROUTES.certificateMedication]: { en: '/medication/[slug]' },
  [ROUTES.certificateTreatment]: { en: '/treatment/[slug]' },
  [ROUTES.certificateService]: { en: '/service/[slug]' },
  '[...rest]': '[...rest]',
};

export const {
  Link: IntlLink,
  redirect,
  permanentRedirect,
  usePathname,
  useRouter,
  getPathname,
} = createLocalizedPathnamesNavigation({
  locales: LOCALES,
  localePrefix,
  pathnames,
});

export const Link = ({ href, locale, ...rest }: any) => {
  const currentLocale = useLocale();

  return (
    <IntlLink
      href={
        href === ROUTES.root && currentLocale !== 'en'
          ? `${href}/`
          : href?.pathname === ROUTES.root && locale !== 'en'
            ? `${href?.pathname}/`
            : href
      }
      localePrefix={
        currentLocale === 'en' || locale === 'en' ? 'never' : 'as-needed'
      }
      {...(locale ? { locale } : {})}
      {...rest}
    />
  );
};
