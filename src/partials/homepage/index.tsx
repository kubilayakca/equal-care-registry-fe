'use client';

import { Link } from '@/navigation';
import { usePathname } from 'next/navigation';
import {
  CERTIFICATES,
  CERTIFICATION_TYPES,
  COMPANIES,
  ICON_MAPPING,
  ROUTES,
} from '@/utils/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useMemo, useEffect, useCallback, useState, useRef } from 'react';
import {
  getPublishedEvaluations,
  generateEvaluationSlug,
  getUniqueTherapeuticAreas,
  getConditionsByTherapeuticArea,
  getUniqueSources,
  type InnIndex,
  type InnIndexBrandDoc,
} from '@/utils/network/evaluations';
import {
  SearchInput,
  TherapeuticAreaDropdown,
  ConditionDropdown,
  SourceDropdown,
} from '@/components/evaluation-filters';
import { Pagination } from '@/components/pagination';
import { Chip } from '@/components/chip';
import { Icon } from '@/components/icon';

export const Homepage = ({ innIndex }: { innIndex: InnIndex }) => {
  return (
    <>
      <Banner />
      <Certifications />
      <Certificates />
      <Evaluations innIndex={innIndex} />
      <Companies />
    </>
  );
};

const Banner = () => {
  const t = useTranslations();

  return (
    <div className='relative banner-bg'>
      <div className='eq-container eq-px h-[32.5rem] flex flex-col justify-center'>
        <div className='flex flex-col gap-16 heading-01 text-white md:whitespace-pre-line'>
          {t('hero_banner_title')}
          <div className='body-l-400 text-white heading-05-400'>
            {t('hero_banner_subtitle')}
          </div>
        </div>
      </div>
      {/* <Image
      src={heroBanner}
      placeholder='blur'
      alt=''
      fill
      className='object-cover'
    /> */}
    </div>
  );
};

const Certifications = () => {
  const t = useTranslations();

  return (
    <div className='bg-white py-10 eq-px'>
      <div className='eq-container flex flex-col gap-6'>
        <div className='text-blue-2 font-gabarito heading-05-500'>
          {t('certifications_title')}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <CertificationType
            icon='/icons/medication-dark.svg'
            label={t('certification_type_medication')}
            href={ROUTES.certificateTypeMedication}
          />
          <CertificationType
            icon='/icons/diagnostic-treatment-dark.svg'
            label={t('certification_type_diagnostic_treatment')}
            href={ROUTES.certificateTypeDiagnosticTreatment}
          />
          <CertificationType
            icon='/icons/digital-diagnostic-treatment-dark.svg'
            label={t('certification_type_digital_diagnostic_treatment')}
            href={ROUTES.certificateTypeDigitalDiagnosticTreatment}
          />
          <CertificationType
            icon='/icons/ai-supported-diagnostic-treatment-dark.svg'
            label={t('certification_type_ai_supported_diagnostic_treatment')}
            href={ROUTES.certificateTypeAiSupportedDiagnosticTreatment}
          />
          <CertificationType
            icon='/icons/femaletech-dark.svg'
            label={t('certification_type_femtech')}
            href={CERTIFICATION_TYPES.femTech}
          />
          <CertificationType
            icon='/icons/maletech-dark.svg'
            label={t('certification_type_maletech')}
            href={CERTIFICATION_TYPES.maleTech}
          />
          <CertificationType
            icon='/icons/digital-diagnostic-treatment-dark.svg'
            label={t('certification_type_digital_prevention')}
            href={ROUTES.certificateTypeDigitalPrevention}
          />
        </div>
      </div>
    </div>
  );
};

const CertificationType = ({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className='flex flex-col gap-4 py-4 px-6 bg-green-100 body-l-400 rounded-xl'
    >
      <div className='h-14'>
        <Image
          src={icon}
          alt=''
          width={0}
          height={0}
          className='h-full w-auto object-left'
          sizes='100vw'
        />
      </div>
      {label}
    </Link>
  );
};

const Certificates = () => {
  const t = useTranslations();

  return (
    <div className='bg-blue-4 py-12 eq-px'>
      <div className='eq-container flex flex-col gap-6'>
        <div className='text-blue-2 font-gabarito heading-05-500'>
          {t('certificates_title')}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6'>
          {CERTIFICATES.map((item, i) => {
            return <CertificateItemCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Evaluations = ({ innIndex }: { innIndex: InnIndex }) => {
  const t = useTranslations();
  const pathname = usePathname();
  const ITEMS_PER_PAGE = 10;

  const publishedEvaluations = useMemo(() => getPublishedEvaluations(innIndex), [innIndex]);

  // Get filter options
  const therapeuticAreas = useMemo(
    () => getUniqueTherapeuticAreas(innIndex),
    [innIndex]
  );
  const sources = useMemo(() => getUniqueSources(innIndex), [innIndex]);

  // Local state for filters - this is the source of truth
  // Start with default values to avoid hydration mismatch
  const [filters, setFilters] = useState({
    search: '',
    therapeuticArea: '',
    condition: '',
    source: '',
    page: 1,
  });

  // Initialize filters from URL on mount (client-side only)
  const isInitialized = useRef(false);
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      const params = new URLSearchParams(window.location.search);
      const urlFilters = {
        search: params.get('search') || '',
        therapeuticArea: params.get('therapeuticArea') || '',
        condition: params.get('condition') || '',
        source: params.get('source') || '',
        page: parseInt(params.get('page') || '1', 10),
      };
      // Only update if there are URL params
      if (params.toString()) {
        setFilters(urlFilters);
      }
    }
  }, []);

  // Get conditions based on selected therapeutic area
  const availableConditions = useMemo(() => {
    if (!filters.therapeuticArea) {
      return [];
    }
    return getConditionsByTherapeuticArea(innIndex, filters.therapeuticArea);
  }, [innIndex, filters.therapeuticArea]);

  // Update URL when filters change (one-way sync: state -> URL)
  // Skip initial render to avoid overwriting URL params before they're read
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams();
    if (filters.search) params.set('search', filters.search);
    if (filters.therapeuticArea) params.set('therapeuticArea', filters.therapeuticArea);
    if (filters.condition) params.set('condition', filters.condition);
    if (filters.source) params.set('source', filters.source);
    if (filters.page > 1) params.set('page', filters.page.toString());

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    
    // Use history.replaceState to update URL without triggering navigation
    window.history.replaceState(null, '', newUrl);
  }, [filters, pathname]);

  // Update filter handlers
  const handleSearchChange = useCallback((value: string) => {
    setFilters(prev => ({ ...prev, search: value, page: 1 }));
  }, []);

  const handleTherapeuticAreaChange = useCallback((value: string) => {
    setFilters(prev => {
      // Reset condition if therapeutic area changes
      let newCondition = prev.condition;
      if (value !== prev.therapeuticArea) {
        if (value) {
          const newAvailableConditions = getConditionsByTherapeuticArea(innIndex, value);
          if (!newAvailableConditions.includes(prev.condition)) {
            newCondition = '';
          }
        } else {
          newCondition = '';
        }
      }
      return { ...prev, therapeuticArea: value, condition: newCondition, page: 1 };
    });
  }, [innIndex]);

  const handleConditionChange = useCallback((value: string) => {
    setFilters(prev => ({ ...prev, condition: value, page: 1 }));
  }, []);

  const handleSourceChange = useCallback((value: string) => {
    setFilters(prev => ({ ...prev, source: value, page: 1 }));
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setFilters(prev => ({ ...prev, page }));
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilters({ search: '', therapeuticArea: '', condition: '', source: '', page: 1 });
  }, []);

  // Filter evaluations
  const filteredEvaluations = useMemo(() => {
    return publishedEvaluations.filter(({ inn, brandDoc }) => {
      // Search filter (case-insensitive, partial match)
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        if (!inn.toLowerCase().includes(searchLower)) {
          return false;
        }
      }

      // Therapeutic area filter
      if (filters.therapeuticArea && brandDoc.therapeuticArea !== filters.therapeuticArea) {
        return false;
      }

      // Condition filter
      if (filters.condition && brandDoc.condition !== filters.condition) {
        return false;
      }

      // Source filter
      if (filters.source && brandDoc.source !== filters.source) {
        return false;
      }

      return true;
    });
  }, [publishedEvaluations, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredEvaluations.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(filters.page, Math.max(1, totalPages));
  const paginatedEvaluations = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEvaluations.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredEvaluations, currentPage]);

  return (
    <div className='bg-blue-4 py-12 eq-px'>
      <div className='eq-container flex flex-col gap-6'>
        <div className='text-blue-2 font-gabarito heading-05-500'>
          {t('evaluations_title')}
        </div>

        {/* Filters */}
        <div className='flex flex-col md:flex-row gap-4'>
          <SearchInput
            value={filters.search}
            onChange={handleSearchChange}
          />
          <TherapeuticAreaDropdown
            value={filters.therapeuticArea}
            options={therapeuticAreas}
            onChange={handleTherapeuticAreaChange}
          />
          <ConditionDropdown
            value={filters.condition}
            options={availableConditions}
            onChange={handleConditionChange}
            disabled={!filters.therapeuticArea}
          />
          <SourceDropdown
            value={filters.source}
            options={sources}
            onChange={handleSourceChange}
          />
          {/* Clear Filters Button */}
          {(filters.search || filters.therapeuticArea || filters.condition || filters.source) && (
            <button
              onClick={handleClearFilters}
              className='px-5 py-3 text-green-500 body-s-500 hover:text-green-600 whitespace-nowrap flex items-center gap-2'
            >
              <Icon type='close-large' size='small' />
              {t('clear_filters') || 'Clear filters'}
            </button>
          )}
        </div>

        {/* Results count */}
        {filteredEvaluations.length > 0 && (
          <div className='body-s-400 text-blue-85'>
            {t('found_results', { count: filteredEvaluations.length }) ||
              `${filteredEvaluations.length} evaluation${filteredEvaluations.length !== 1 ? 's' : ''} found`}
          </div>
        )}

        {/* Evaluation List */}
        {paginatedEvaluations.length > 0 ? (
          <>
            <div className='flex flex-col gap-3'>
              {paginatedEvaluations.map(({ inn, brandDoc }, i) => {
                const slug = generateEvaluationSlug(inn, brandDoc.id);
                return (
                  <EvaluationItemCard
                    key={`${inn}-${brandDoc.id}`}
                    slug={slug}
                    inn={inn}
                    brandDoc={brandDoc}
                  />
                );
              })}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredEvaluations.length}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className='bg-white rounded-xl p-8 text-center'>
            <div className='body-l-400 text-blue-85'>
              {t('no_evaluations_found') || 'No evaluations found'}
            </div>
            {(filters.search ||
              filters.therapeuticArea ||
              filters.condition ||
              filters.source) && (
              <button
                onClick={handleClearFilters}
                className='mt-4 text-green-500 body-s-500 hover:underline'
              >
                {t('clear_filters') || 'Clear all filters'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const CertificateItemCard = ({ item }: { item: (typeof CERTIFICATES)[0] }) => {
  const route = useMemo(() => {
    console.log(item.slug);
    switch (item.type) {
      case CERTIFICATION_TYPES.medication:
        return ROUTES.certificateMedication;
      case CERTIFICATION_TYPES.digitalPrevention:
        return ROUTES.certificatePrevention;
      case CERTIFICATION_TYPES.diagnosticTreatment:
      case CERTIFICATION_TYPES.digitalDiagnosticTreatment:
      case CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment:
        return ROUTES.certificateTreatment;
      case CERTIFICATION_TYPES.femTech:
      case CERTIFICATION_TYPES.maleTech:
        return ROUTES.certificateService;
      default:
        return '';
    }
  }, [item.type]);

  return (
    <Link
      href={
        {
          pathname: route,
          params: { slug: item.slug || '' },
        } as any
      }
    >
      <div className='h-[17.5rem] bg-white rounded-xl mb-2.5 flex items-center justify-center'>
        <Image src={ICON_MAPPING[item.type]} alt='' width={64} height={64} />
      </div>
      <div>
        <div className='text-blue-2 body-l-500'>{item.name}</div>
        <div className='text-blue-60 body-s-400'>{item.company.name}</div>
      </div>
    </Link>
  );
};

const EvaluationItemCard = ({
  slug,
  inn,
  brandDoc,
}: {
  slug: string;
  inn: string;
  brandDoc: InnIndexBrandDoc;
}) => {
  const t = useTranslations();

  return (
    <Link
      href={
        {
          pathname: ROUTES.certificateEvaluation,
          params: { slug },
        } as any
      }
      className='bg-white rounded-xl p-4 md:p-6 flex items-center gap-4 md:gap-6 hover:shadow-md transition-shadow border border-transparent hover:border-green-400 block'
      onClick={(e) => {
        // Ensure the link click works properly
        e.stopPropagation();
      }}
    >
      {/* Icon */}
      <div className='w-16 h-16 md:w-20 md:h-20 rounded-lg border border-gray-100 shrink-0 flex items-center justify-center bg-green-50 pointer-events-none'>
        <Image
          src={ICON_MAPPING[CERTIFICATION_TYPES.medication]}
          alt=''
          width={40}
          height={40}
          className='md:w-12 md:h-12'
        />
      </div>

      {/* Content */}
      <div className='flex-1 min-w-0'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4'>
          <div className='flex-1 min-w-0'>
            <div className='text-blue-2 body-l-500 md:heading-05-500 mb-1'>{inn}</div>
            {brandDoc.brandName && (
              <div className='text-blue-85 body-m-400 mb-2'>{brandDoc.brandName}</div>
            )}
            <div className='flex flex-wrap gap-2 pointer-events-none'>
              {brandDoc.therapeuticArea && (
                <Chip icon='ingredient'>{brandDoc.therapeuticArea}</Chip>
              )}
              {brandDoc.condition && <Chip icon='ingredient'>{brandDoc.condition}</Chip>}
              {brandDoc.source && (
                <div className='flex items-center gap-1.5 px-2.5 py-1 bg-blue-4 text-blue-2 rounded-md'>
                  <span className='body-s-500'>{brandDoc.source}</span>
                </div>
              )}
            </div>
          </div>

          {/* Arrow */}
          <div className='shrink-0 text-green-500 pointer-events-none'>
            <Icon type='chevron-right' size='medium' />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Companies = () => {
  const t = useTranslations();

  return (
    <div className='bg-white py-12 eq-px'>
      <div className='eq-container flex flex-col gap-6'>
        <div className='text-blue-2 font-gabarito heading-05-500'>
          {t('companies_title')}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6'>
          {COMPANIES.map((item, i) => {
            return <CompanyItemCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const CompanyItemCard = ({ item }: { item: (typeof COMPANIES)[0] }) => {
  return (
    <div className='bg-white py-8 px-6 flex gap-10 items-start'>
      <Image src={item.image} alt='' width={72} height={72} />
      <div className='flex flex-col gap-2'>
        <div className='text-blue-2 heading-05-500'>{item.name}</div>
        <div className='text-blue-85 body-m-400 mb-5'>{item.country}</div>
        <div className='mt-auto h-px bg-gray-100' />
      </div>
    </div>
  );
};
