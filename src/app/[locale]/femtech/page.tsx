import { Metadata, ResolvingMetadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { CertificationType } from '@/partials/certification-type';
import { CERTIFICATION_TYPES } from '@/utils/constants';

export const revalidate = 10;

export async function generateMetadata(
  { params: { locale, slug } }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: `${t('page_femaletech_title')} - ${t('equalcare')}`,
    description: t('page_femaletech_description'),
  };
}

export default async function Home({ params: { locale, slug } }: any) {
  unstable_setRequestLocale(locale);

  return <CertificationType type={CERTIFICATION_TYPES.femaleTech} />;
}
