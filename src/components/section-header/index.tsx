export const SectionHeader = ({
  label,
  className = '',
}: {
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex justify-between gap-10 border-b border-gray-100 mb-4 ${className}`}
    >
      <div className='border-b-2 border-green-500 heading-05-500 text-blue-2'>
        {label}
      </div>
    </div>
  );
};
