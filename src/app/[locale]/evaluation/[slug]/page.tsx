import { Metadata, ResolvingMetadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { EvaluationDetail } from '@/partials/evaluation-detail';
import { EVALUATION_DATA } from '@/utils/constants/evaluations';
import { notFound } from 'next/navigation';

export const revalidate = 10;

export async function generateMetadata(
    { params: { locale, slug } }: any,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const t = await getTranslations({ locale });

    const content = await Promise.resolve({
        data: { header: 'Equalcare Evaluation', description: 'Equalcare Evaluation' },
    });

    return {
        title: `${content?.data?.header} - ${t('equalcare')}`,
        description: content?.data?.description,
    };
}

export default async function EvaluationPage({ params: { locale, slug } }: any) {
    unstable_setRequestLocale(locale);

    // For now, we only have one evaluation (Eptinezumab)
    // In the future, you can map slugs to different evaluation data
    if (slug !== 'vyepti-eptinezumab') {
        return notFound();
    }

    const t = await getTranslations({ locale });

    return <EvaluationDetail evaluationData={EVALUATION_DATA} slug={slug} />;
}

