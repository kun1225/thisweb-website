import { cn, formatBrNewLine } from '@/src/shared/lib/utils';

export default function ModuleProductParagraph({
  paragraph,
  className,
}: {
  paragraph?: string;
  className?: string;
}) {
  if (!paragraph) return null;
  return (
    <p
      className={cn(
        'text-black-light mx-auto mt-6 max-w-2xl text-center text-lg leading-8',
        className
      )}
      dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
    />
  );
}
