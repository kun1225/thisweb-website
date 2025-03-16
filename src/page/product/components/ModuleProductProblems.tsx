// Types
import { TypeIcon } from '@/src/types/typeIcon';
import { TypeModuleProductProblem, TypeModuleProductProblems } from '@/src/types/typeModules';
// Components
import * as Icons from 'react-icons/fa';
import { formatBrNewLine, hasArrayValue, hasObjectValue } from '@/src/shared/lib/utils';

export default function ModuleProductProblems({ data }: { data: TypeModuleProductProblems }) {
  if (!hasObjectValue(data)) return null;

  const { heading, headingId, paragraph, problems } = data;

  return (
    <section className="c py-32">
      <Heading heading={heading} headingId={headingId} />
      <Paragraph paragraph={paragraph} />
      <Problems problems={problems} />
    </section>
  );
}

function Heading({ heading, headingId }: { heading?: string; headingId?: string }) {
  if (!heading) return null;
  return (
    <h2
      className="mx-auto mb-6 max-w-md text-center text-3xl leading-[1.5em] font-bold sm:max-w-none sm:text-4xl md:text-5xl"
      id={headingId || ''}
    >
      {heading}
    </h2>
  );
}

function Paragraph({ paragraph }: { paragraph?: string }) {
  if (!paragraph) return null;
  return (
    <p
      className="text-black-light mx-auto mt-6 max-w-2xl text-center text-lg leading-8"
      dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
    />
  );
}

function Problems({ problems }: { problems: TypeModuleProductProblem[] }) {
  if (!hasArrayValue(problems)) return null;

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
      {problems.map((problem) => (
        <Problem key={problem._key} problem={problem} />
      ))}
    </div>
  );
}

function Problem({ problem }: { problem: TypeModuleProductProblem }) {
  return (
    <div className="max-w-xs space-y-4 p-4">
      <ProblemIcon icon={problem.icon} />
      <ProblemHeading heading={problem.heading} />
      <ProblemParagraph paragraph={problem.paragraph} />
    </div>
  );
}

type IconName = keyof typeof Icons;
// eslint-disable-next-line import/namespace -- Dynamic import of icons by name from react-icons
const DynamicFontAwesomeIcon = ({ name }: { name: IconName }) => Icons[name];
function ProblemIcon({ icon }: { icon: TypeIcon }) {
  const Icon = DynamicFontAwesomeIcon({ name: icon.name as IconName });

  return (
    <Icon className="bg-blue-1 flex h-12 w-12 items-center justify-center rounded-full p-2.5 text-white" />
  );
}

function ProblemHeading({ heading }: { heading?: string }) {
  if (!heading) return null;
  return <h3 className="text-2xl">{heading}</h3>;
}

function ProblemParagraph({ paragraph }: { paragraph?: string }) {
  if (!paragraph) return null;
  return <p dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }} />;
}
