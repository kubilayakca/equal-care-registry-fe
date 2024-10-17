import { Icon, IconType } from '../icon';

export const Chip = ({
  icon,
  children,
}: {
  icon: string;
  children: string;
}) => {
  return (
    <div className='flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-green-500 rounded-md'>
      <Icon type={icon as IconType} size='small' />
      <span className='body-s-500'>{children}</span>
    </div>
  );
};
