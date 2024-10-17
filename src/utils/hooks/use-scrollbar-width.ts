import { useEffect, useState } from 'react';
import { scrollbarWidth } from '@xobotyi/scrollbar-width';

export function useScrollbarWidth(): number {
  const [sbw, setSbw] = useState(scrollbarWidth());

  // this needed to ensure the scrollbar width in case hook called before the DOM is ready
  useEffect(() => {
    if (typeof sbw !== 'undefined') {
      return;
    }

    const raf = requestAnimationFrame(() => {
      setSbw(scrollbarWidth());
    });

    return () => cancelAnimationFrame(raf);
  }, [sbw]);

  return sbw || 8;
}
