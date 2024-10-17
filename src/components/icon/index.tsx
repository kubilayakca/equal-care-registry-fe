import { MouseEvent } from 'react';
import { noop } from '@/utils/helpers';
import ICONS from './icons';

export type IconType = keyof typeof ICONS;
export type IconSize =
  | 'tiny'
  | 'xs'
  | 'small'
  | 'medium'
  | 'large'
  | 'xl'
  | 'huge'
  | 'custom';

export const Icon = ({
  type,
  size = 'medium',
  className,
  onClick,
}: {
  type: IconType;
  size?: IconSize;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}) => {
  const IconTag = ICONS[type];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${
        size === 'tiny'
          ? 'w-[14px] h-[14px]'
          : size === 'xs'
          ? 'w-4 h-4'
          : size === 'small'
          ? 'w-5 h-5'
          : size === 'medium'
          ? 'w-6 h-6'
          : size === 'large'
          ? 'w-8 h-8'
          : size === 'xl'
          ? 'w-9 h-9'
          : size === 'huge'
          ? 'w-12 h-12'
          : ''
      } ${className || ''}`}
      onClick={onClick ? onClick : noop}
    >
      <IconTag className='w-full h-full absolute top-0 left-0' />
    </div>
  );
};
