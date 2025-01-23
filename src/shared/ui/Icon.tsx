// Libs
import { cn } from '@/src/shared/lib/utils';
// Components
import * as Icons from 'react-icons/fa';
// Types
import { HTMLAttributes } from 'react';
import { TypeIcon } from '@/src/types/typeIcon';

type IconName = keyof typeof Icons;
// eslint-disable-next-line import/namespace -- Dynamic import of icons by name from react-icons
const DynamicFontAwesomeIcon = ({ name }: { name: IconName }) => Icons[name];
export default function Icon({
  icon,
  className,
}: {
  icon: TypeIcon;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}) {
  const Icon = DynamicFontAwesomeIcon({ name: icon.name as IconName });

  return (
    <Icon
      className={cn(
        'c-icon text-blue h-10 w-10 rounded-2xl bg-gray-100 p-2 shadow-md md:h-12 md:w-12 md:p-4',
        className
      )}
    />
  );
}
