import { Suspense } from 'react';
import { headers } from 'next/headers';
import { getTranslations } from 'next-intl/server';
import { Metadata, ResolvingMetadata } from 'next';
import { Homepage } from '@/partials/homepage';
import { fetchInnIndex } from '@/utils/network/evaluations';

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata(
  { params: { locale } }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: `${t('page_home_title')} - ${t('equalcare')}`,
    description: t('page_home_description'),
  };
}

export default async function Home({ params: { locale } }: any) {
  const t = await getTranslations({ locale });

  // TODO: check it on k8s env
  const headersList = headers();

  return (
    <Suspense fallback={<PageSkeleton />}>
      {/* @ts-ignore */}
      <PageContentWrapper />
    </Suspense>
  );
}

async function PageContentWrapper() {
  return (
    <>
      {/* @ts-ignore */}
      <PageContent />
    </>
  );
}

async function PageContent() {
  const innIndex = await fetchInnIndex();
  return <Homepage innIndex={innIndex} />;
}

function PageSkeleton() {
  return <div className='min-h-screen' />;
}
