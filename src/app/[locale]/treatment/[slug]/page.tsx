import { Metadata, ResolvingMetadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { CertificationDetail } from '@/partials/certification-detail';
import { CERTIFICATES, CERTIFICATION_TYPES } from '@/utils/constants';
import { notFound } from 'next/navigation';

export const revalidate = 10;

export async function generateMetadata(
  { params: { locale, slug } }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const t = await getTranslations({ locale });

  const content = await Promise.resolve({
    data: { header: 'Registry', description: 'TODO:' },
  });

  return {
    title: `${content?.data?.header} - ${t('equalcare')}`,
    description: content?.data?.description,
  };
}

export default async function Home({ params: { locale, slug } }: any) {
  unstable_setRequestLocale(locale);

  const found = CERTIFICATES.find(
    (c) =>
      c.slug === slug &&
      [
        CERTIFICATION_TYPES.diagnosticTreatment,
        CERTIFICATION_TYPES.digitalDiagnosticTreatment,
        CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment,
      ].includes(c.type)
  );
  if (!found) {
    return notFound();
  }

  const t = await getTranslations({ locale });

  return <CertificationDetail certificate={found} />;
}
