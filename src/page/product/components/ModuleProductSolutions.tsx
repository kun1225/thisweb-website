import { HTMLAttributes } from 'react';
// Types
import { TypeModuleProductSolution, TypeModuleProductSolutions } from '@/src/types/typeModules';
import { cn, formatBrNewLine, hasArrayValue, hasObjectValue } from '@/src/shared/lib/utils';
import Media from '@/src/shared/ui/Media';
// Components
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';

export default function ModuleProductSolutions({ data }: { data: TypeModuleProductSolutions }) {
  if (!hasObjectValue(data)) return null;

  const { heading, headingId, paragraph, solutions } = data;

  return (
    <section className="c bg-neutral-100 py-32">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductParagraph paragraph={paragraph} />
      <Solutions solutions={solutions} />
    </section>
  );
}

function Solutions({ solutions }: { solutions?: TypeModuleProductSolution[] }) {
  if (!hasArrayValue(solutions)) return null;

  return (
    <div className="text-black-light mx-auto mt-16 grid grid-cols-1 gap-6 md:max-w-3xl md:grid-cols-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3 xl:grid-rows-2">
      {solutions?.map((solution, index) => (
        <Solution key={solution._key} solution={solution} index={index} />
      ))}
    </div>
  );
}

function Solution({
  solution,
  className,
  index,
}: {
  solution: TypeModuleProductSolution;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  index: number;
}) {
  const { heading, paragraph, media } = solution || {};

  return (
    <div
      className={cn(
        'bg-white-pure hover:bg-blue-2 group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-500',
        className,
        index === 0 && 'order-1 justify-between xl:order-none',
        index === 1 && 'order-3 justify-between xl:order-none',
        index === 2 && 'order-2 row-span-2 xl:order-none',
        index === 3 && 'order-4 md:col-span-2 xl:order-none'
      )}
    >
      <div>
        {heading ? (
          <h3 className="text-blue mb-2 font-semibold transition duration-500 group-hover:text-white">
            {heading}
          </h3>
        ) : null}
        {paragraph ? (
          <p
            className="transition duration-500 group-hover:text-white"
            dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
          />
        ) : null}
      </div>
      {media ? (
        <Media
          data={media}
          className={cn(
            'mt-8 -mb-7 w-full drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-transform duration-500 select-none group-hover:-translate-y-4',
            index === 2 && 'h-full translate-x-6',
            index === 3 && 'mx-auto max-w-md'
          )}
          imgClassName={cn(index === 2 && 'h-full object-cover object-left-top')}
        />
      ) : null}
    </div>
  );
}
