import { Metadata, ResolvingMetadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { EvaluationDetail } from '@/partials/evaluation-detail';
import { fetchInnIndex, fetchEvaluation, getPublishedEvaluations, generateEvaluationSlug } from '@/utils/network/evaluations';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

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

    try {
        // Fetch the inn_index to find the matching evaluation
        const innIndex = await fetchInnIndex();
        const publishedEvaluations = getPublishedEvaluations(innIndex);

        // Find the evaluation that matches this slug
        const evaluation = publishedEvaluations.find(({ inn, brandDoc }) => {
            const evaluationSlug = generateEvaluationSlug(inn, brandDoc.id);
            return evaluationSlug === slug;
        });

        if (!evaluation) {
            return notFound();
        }

        // Fetch the evaluation data from S3
        const evaluationData = await fetchEvaluation(evaluation.inn, evaluation.brandDoc.id);

        const t = await getTranslations({ locale });

        return <EvaluationDetail evaluationData={evaluationData} slug={slug} />;
    } catch (error) {
        console.error('Error loading evaluation:', error);
        return notFound();
    }
}

