import Image from 'next/image';
import useBreakpoint from '@/utils/hooks/use-breakpoints';

export const Logo = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  const breakpoint = useBreakpoint();

  return (
    <Image
      width={breakpoint === 'lg' ? 307 : breakpoint === 'md' ? 286 : 245}
      height={breakpoint === 'lg' ? 60 : breakpoint === 'md' ? 56 : 48}
      src={`/logo-${variant}.svg`}
      alt='EQUALCARE'
    />
  );
};
