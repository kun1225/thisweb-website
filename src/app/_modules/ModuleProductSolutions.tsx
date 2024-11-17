import {
  hasObjectValue,
  hasArrayValue,
  formatBrNewLine,
} from '@/src/libs/helpers';
import { cn } from '@/src/libs/utils';
// Components
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';
import Media from '../_components/Media';
// Types
import {
  TypeModuleProductSolutions,
  TypeModuleProductSolution,
} from '@/src/types/typeModules';
import { HTMLAttributes } from 'react';

export default function ModuleProductSolutions({
  data,
}: {
  data: TypeModuleProductSolutions;
}) {
  if (!hasObjectValue(data)) return null;

  const { heading, paragraph, solutions } = data;

  return (
    <section className="m-product__solutions">
      <ModuleProductHeading heading={heading} />
      <ModuleProductParagraph paragraph={paragraph} />
      <Solutions solutions={solutions} />
    </section>
  );
}

function Solutions({ solutions }: { solutions?: TypeModuleProductSolution[] }) {
  if (!hasArrayValue(solutions)) return null;

  return (
    <div className="m-product__solutions__solutions">
      {solutions?.map((solution) => (
        <Solution key={solution._key} solution={solution} />
      ))}
    </div>
  );
}

function Solution({
  solution,
  className,
}: {
  solution: TypeModuleProductSolution;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}) {
  const { heading, paragraph, media } = solution || {};

  return (
    <div className={cn('m-product__solutions__solution', className)}>
      <div>
        {heading ? (
          <h3 className="m-product__solutions__solution__heading">{heading}</h3>
        ) : null}
        {paragraph ? (
          <p
            className="m-product__solutions__solution__paragraph"
            dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
          />
        ) : null}
      </div>
      {media ? (
        <Media data={media} className="m-product__solutions__solution__media" />
      ) : null}
    </div>
  );
}
