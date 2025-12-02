import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

export const Source = ({ source }: { source: { name: string; url: string | null; prevalence_source?: string | null } }) => {
    const t = useTranslations();

    return (
        <div className='bg-white py-8 px-6 rounded-xl grow flex max-lg:flex-col gap-6 lg:gap-10 items-start'>
            <div className='flex flex-col lg:grow'>
                <div className='heading-05-500 text-blue-2'>{t('source')}</div>
                <div className='my-5 h-px bg-gray-50' />
                <div className='grid grid-cols-[max-content,_auto] md:grid-cols-[minmax(max-content,_auto),_auto] lg:grid-cols-[minmax(12.5rem,_max-content),_auto] gap-5 lg:gap-4'>
                    <div className='body-l-500 text-blue-2'>{t('source_name')}:</div>
                    <div className='body-m-400 text-blue-85'>{source.name}</div>
                    {source.url && (
                        <>
                            <div className='body-l-500 text-blue-2'>{t('source_url')}:</div>
                            <NextLink
                                href={source.url}
                                target='_blank'
                                rel='nofollow'
                                className='body-m-400 text-green-500'
                            >
                                {source.url}
                            </NextLink>
                        </>
                    )}
                    {source.prevalence_source && (
                        <>
                            <div className='body-l-500 text-blue-2'>{t('prevalence_source')}:</div>
                            <NextLink
                                href={source.prevalence_source}
                                target='_blank'
                                rel='nofollow'
                                className='body-m-400 text-green-500'
                            >
                                {source.prevalence_source}
                            </NextLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

