import { ButtonHTMLAttributes, useMemo } from 'react';
import { Link } from '@/navigation';
import { ROUTES } from '@/utils/constants';
import { ConditionalWrapper } from '../conditional-wrapper';
import { Icon, IconType } from '../icon';

type ButtonVariant = 'blue' | 'green' | 'tertiary';

type ButtonSize = 'default' | 'large';

export const Button = ({
  type = 'button',
  children,
  icon,
  href,
  target,
  hrefComponent = Link,
  hrefLocale,
  variant = 'blue',
  size = 'default',
  preventDefault,
  iconPosition,
  className,
  disabled,
  forwardEffect,
  componentDiv,
  onClick,
  rel,
  style = {},
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: IconType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string | { pathname: string; params?: any };
  hrefComponent?: any;
  hrefLocale?: string;
  target?: '_self' | '_blank';
  preventDefault?: boolean;
  forwardEffect?: boolean;
  iconPosition?: 'left' | 'right';
  componentDiv?: boolean;
}) => {
  const variantClass = useMemo(() => {
    if (variant === 'blue') {
      return `bg-gold-100 text-brown-1 border border-transparent ${
        forwardEffect
          ? 'transition-transform hover:translate-x-2 duration-300 will-change-transform'
          : ''
      }`;
    }
    if (variant === 'green') {
      return `text-gold-100 border border-gold-100 ${
        forwardEffect
          ? 'transition-transform hover:translate-x-2 duration-300 will-change-transform'
          : ''
      }`;
    }
    if (variant === 'tertiary') {
      return `text-blue-2 border border-green-400 rounded bg-white ${
        forwardEffect
          ? 'transition-transform hover:translate-x-2 duration-300 will-change-transform'
          : ''
      }`;
    }
  }, [variant, forwardEffect]);

  const sizeClass = useMemo(() => {
    if (size === 'default') {
      return `flex gap-1.5 items-center py-2.5 md:py-3 body-s-500  ${
        icon ? 'pl-[1.125rem] pr-[0.875rem] md:pl-5 md:pr-4' : 'pl-5 pr-5'
      }`;
    }
    if (size === 'large') {
      return `flex gap-2 items-center py-3 md:py-3 body-m-600 ${
        icon ? 'pl-6 pr-5 md:pl-8 md:pr-6' : 'pl-6 pr-6 md:pl-8 md:pr-8'
      }`;
    }
  }, [size, variant, icon]);

  const HrefWrapper = hrefComponent || Link;
  const Tag = componentDiv ? 'div' : 'button';

  return (
    <ConditionalWrapper
      condition={!!href}
      wrapper={(children: JSX.Element) => (
        <HrefWrapper
          href={href || ROUTES.root}
          target={target || '_self'}
          passHref
          {...(hrefLocale ? { locale: hrefLocale } : {})}
          {...(rel ? { rel } : {})}
          onClick={(e: any) => {
            if (preventDefault) {
              e.preventDefault();
              e.stopPropagation();
              // onClick();
            }
          }}
        >
          {children}
        </HrefWrapper>
      )}
    >
      <Tag
        type={type}
        className={`transition-colors duration-[400ms] ${variantClass || ''} ${
          sizeClass || ''
        } ${className || ''} ${
          iconPosition === 'left'
            ? 'flex-row-reverse justify-center'
            : 'flex-row'
        } ${disabled ? 'opacity-70' : 'opacity-100'}`}
        disabled={disabled}
        onClick={onClick as any}
        {...(style ? { style } : null)}
      >
        {children}
        {icon && (
          <Icon type={icon} size={size === 'default' ? 'xs' : 'medium'} />
        )}
      </Tag>
    </ConditionalWrapper>
  );
};
