export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: {
  wrapper?: (c: JSX.Element) => void;
  condition?: boolean;
  children: any;
}) => (condition && wrapper ? wrapper(children) : children);
