import { useEffect, useState } from 'react';

const breakpoints = {
  0: 'sm',
  768: 'md',
  1080: 'lg',
};

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState('');
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 768) {
      setBreakPoint(breakpoints[0]);
    }
    if (768 <= windowSize.width && windowSize.width < 1080) {
      setBreakPoint(breakpoints[768]);
    }
    if (windowSize.width >= 1080) {
      setBreakPoint(breakpoints[1080]);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
