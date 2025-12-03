'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const t = useTranslations();

  if (totalPages <= 1) {
    return null;
  }

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // Near the start
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='body-s-400 text-blue-85'>
        {t('showing_results', { start: startItem, end: endItem, total: totalItems }) ||
          `Showing ${startItem}-${endItem} of ${totalItems} evaluations`}
      </div>
      <div className='flex items-center gap-2'>
        <Button
          variant='tertiary'
          size='default'
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          icon='chevron-left'
          iconPosition='left'
          aria-label={t('previous_page') || 'Previous page'}
        >
          {t('previous') || 'Previous'}
        </Button>

        <div className='flex items-center gap-1'>
          {getPageNumbers().map((page, index) => {
            if (page === 'ellipsis') {
              return (
                <span key={`ellipsis-${index}`} className='px-2 text-blue-85'>
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`min-w-[2.5rem] h-10 px-3 rounded body-s-500 transition-colors ${
                  isActive
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-blue-2 border border-green-400 hover:bg-blue-4'
                }`}
                aria-label={t('go_to_page', { page: pageNum }) || `Go to page ${pageNum}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <Button
          variant='tertiary'
          size='default'
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          icon='chevron-right'
          aria-label={t('next_page') || 'Next page'}
        >
          {t('next') || 'Next'}
        </Button>
      </div>
    </div>
  );
};

