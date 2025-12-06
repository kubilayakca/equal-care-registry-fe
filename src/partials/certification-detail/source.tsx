import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

type SourceProps = {
    source: {
        name: string;
        url: string | null;
        prevalence_source?: string | string[] | null;
    };
};

export const Source = ({ source }: SourceProps) => {
    const t = useTranslations();

    const prevalenceSources = Array.isArray(source.prevalence_source)
        ? source.prevalence_source.filter((item) => Boolean(item))
        : source.prevalence_source
            ? [source.prevalence_source]
            : [];

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
                            <div className='min-w-0 break-words'>
                                <NextLink
                                    href={source.url}
                                    target='_blank'
                                    rel='nofollow'
                                    className='body-m-400 text-green-500 break-words'
                                >
                                    {source.url}
                                </NextLink>
                            </div>
                        </>
                    )}
                    {prevalenceSources.length > 0 && (
                        <>
                            <div className='body-l-500 text-blue-2'>{t('prevalence_source')}:</div>
                            <div className='min-w-0 break-words flex flex-col gap-2'>
                                {prevalenceSources.map((item, index) => (
                                    <NextLink
                                        key={`${item}-${index}`}
                                        href={item}
                                        target='_blank'
                                        rel='nofollow'
                                        className='body-m-400 text-green-500 break-words'
                                    >
                                        {item}
                                    </NextLink>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

