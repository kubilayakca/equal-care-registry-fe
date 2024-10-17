import { MutableRefObject, useEffect, useRef } from 'react';
import isequal from 'lodash.isequal';

export const deepCompareEquals = (a: any, b: any): boolean => {
  return isequal(a, b);
};

function useDeepCompareMemoize(value: any): MutableRefObject<any> | undefined {
  const ref = useRef();

  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

export function useDeepCompareEffect(callback: any, dependencies: any): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, dependencies.map(useDeepCompareMemoize));
}
