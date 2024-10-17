import { MutableRefObject, useEffect } from 'react';

const hasIgnoredClass = (element: any, ignoredClass: string) =>
  (element.correspondingElement
    ? element.correspondingElement
    : element
  ).classList.contains(ignoredClass);

const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  handler: (e: any) => void,
  options: { exclude: { class: string } }
): void => {
  useEffect(
    () => {
      const listener = (event: any): void => {
        // Do nothing if clicking ref's element or descendent elements
        if (
          !ref?.current ||
          ref?.current.contains(event.target) ||
          hasIgnoredClass(event.target, options.exclude?.class)
        ) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler, options]
  );
};

export default useOnClickOutside;
