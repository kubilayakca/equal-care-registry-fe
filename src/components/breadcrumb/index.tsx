'use client';

import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  MouseEvent,
} from 'react';
import { Link } from '@/navigation';
import { noop } from '@/utils/helpers';

export const BreadcrumbItem = ({
  href = '',
  onClick,
  last = false,
  variant,
  highlighted,
  className,
  children,
}: PropsWithChildren<{
  href?: string | { pathname: string; params: any };
  onClick?: (e: MouseEvent) => void;
  last?: boolean;
  highlighted?: boolean;
  className?: string;
  variant?: 'dark' | 'light';
}>) => {
  return (
    <>
      <li
        className={`flex ${
          highlighted
            ? variant === 'dark'
              ? 'text-gold-50'
              : 'text-gold-400'
            : ''
        } ${className ? className : ''}`}
      >
        {href ? (
          <Link href={href} onClick={onClick ? onClick : noop}>
            {children}
          </Link>
        ) : (
          <span>{children}</span>
        )}
      </li>
      {!last && (
        <li
          className={`inline-flex ${
            variant === 'dark' ? 'text-gold-50' : 'text-gold-400'
          } ${className ? className : ''}`}
        >
          {`/`}
        </li>
      )}
    </>
  );
};

export const Breadcrumb = ({
  className,
  children,
  variant = 'dark',
}: PropsWithChildren<{ className?: string; variant: 'dark' | 'light' }>) => {
  const manipulatedChildren = Children.toArray(children)
    .filter((child) => isValidElement(child) && child.type === BreadcrumbItem)
    .map((child) => {
      return cloneElement(child as React.ReactElement<any>, {
        variant,
      });
    });
  return (
    <nav aria-label='Breadcrumb' className={`uppercase ${className || ''}`}>
      <ol
        className={`flex gap-5 body-s-500 items-center ${
          variant === 'dark' ? 'text-gold-60' : 'text-brown-1-60'
        }`}
      >
        {manipulatedChildren}
      </ol>
    </nav>
  );
};
