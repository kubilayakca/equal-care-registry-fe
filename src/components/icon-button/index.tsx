'use client';

import { Link } from '@/navigation';
import { ROUTES } from '@/utils/constants';
import { noop } from '@/utils/helpers';
import { ButtonHTMLAttributes, useMemo } from 'react';
import { ConditionalWrapper } from '../conditional-wrapper';
import { Icon, IconType, IconSize } from '../icon';

type IconButtonVariant = 'blue' | 'green' | 'tertiary';

export const IconButton = ({
  icon,
  size = 'default',
  useDiv,
  href,
  variant,
  className,
  onClick,
  'aria-label': ariaLabel,
}: ButtonHTMLAttributes<HTMLButtonElement | HTMLDivElement> & {
  icon: IconType;
  size?: 'default' | 'small';
  href?: string;
  variant?: IconButtonVariant;
  useDiv?: boolean;
}) => {
  const classes = `inline-flex items-center justify-center focus-visible:outline-none cursor-pointer ${
    className || ''
  }`;

  const variantClass = useMemo(() => {
    if (variant === 'blue') {
      return 'bg-gold-100 text-brown-1 border border-transparent';
    }
    if (variant === 'green') {
      return 'text-gold-100 bg-brown-1 border border-transparent';
    }
    if (variant === 'tertiary') {
      return 'text-blue-2 border border-green-400 rounded bg-white';
    }
  }, [variant]);

  const sizeClass = useMemo(() => {
    if (size === 'default') {
      return 'w-10 h-10 md:w-12 md:h-12';
    }
    if (size === 'small') {
      return 'w-9 h-9 md:w-10 md:h-10';
    }
  }, [size]);

  return (
    <ConditionalWrapper
      condition={!!href}
      wrapper={(children: JSX.Element) => (
        <Link href={href || ROUTES.root} passHref>
          {children}
        </Link>
      )}
    >
      {useDiv ? (
        <div
          className={`${classes} ${variantClass} ${sizeClass}`}
          onClick={onClick ? onClick : noop}
        >
          <Icon type={icon} size={size === 'small' ? 'medium' : 'medium'} />
        </div>
      ) : (
        <button
          className={`${classes} ${variantClass} ${sizeClass}`}
          onClick={onClick ? onClick : noop}
          aria-label={ariaLabel || ''}
        >
          <Icon type={icon} size={size === 'small' ? 'medium' : 'medium'} />
        </button>
      )}
    </ConditionalWrapper>
  );
};
