import { cn } from '@/lib/utils';

import { HeadingType } from '../type';
interface TableOfContentsIndicatorProps {
  structuredHeadings: HeadingType[];
  activeId: string | undefined;
  className?: React.HTMLProps<HTMLElement>['className'];
}

const TableOfContentsIndicator: React.FC<TableOfContentsIndicatorProps> = ({
  structuredHeadings,
  activeId,
  className = '',
}) => {
  return (
    <div className={cn(className)}>
      {structuredHeadings.map((h2: HeadingType) => (
        <>
          <div
            className={cn(
              'h-1 rounded-full w-6',
              h2.id === activeId
                ? 'bg-neutral-950 hover:bg-primary'
                : 'bg-gray-400 hover:bg-neutral-900',
            )}
          ></div>
          {h2.children.length > 0 &&
            h2.children.map((h3: HeadingType) => (
              <div
                className={cn(
                  'h-1 rounded-full w-4',
                  h3.id === activeId
                    ? 'bg-neutral-950 hover:bg-primary'
                    : 'bg-gray-400 hover:bg-neutral-900',
                )}
              ></div>
            ))}
        </>
      ))}
    </div>
  );
};

export default TableOfContentsIndicator;
