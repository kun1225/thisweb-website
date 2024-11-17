import {
  formatBrNewLine,
  hasArrayValue,
  hasObjectValue,
} from '@/src/libs/helpers';
// Components
import * as Icons from 'react-icons/fa';
// Types
import {
  TypeModuleProductProblems,
  TypeModuleProductProblem,
  TypeModuleProblemIcon,
} from '@/src/types/typeModules';

export default function ModuleProductProblems({
  data,
}: {
  data: TypeModuleProductProblems;
}) {
  if (!hasObjectValue(data)) return null;

  const { heading, paragraph, problems } = data;

  return (
    <section className="m-product__problems">
      <Heading heading={heading} />
      <Paragraph paragraph={paragraph} />
      <Problems problems={problems} />
    </section>
  );
}

function Heading({ heading }: { heading?: string }) {
  if (!heading) return null;
  return <h2 className="m-product__problems__heading">{heading}</h2>;
}

function Paragraph({ paragraph }: { paragraph?: string }) {
  if (!paragraph) return null;
  return (
    <p
      className="m-product__problems__paragraph"
      dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
    />
  );
}

function Problems({ problems }: { problems: TypeModuleProductProblem[] }) {
  if (!hasArrayValue(problems)) return null;

  return (
    <div className="m-product__problems__list">
      {problems.map((problem) => (
        <Problem key={problem._key} problem={problem} />
      ))}
    </div>
  );
}

function Problem({ problem }: { problem: TypeModuleProductProblem }) {
  return (
    <div className="m-product__problems__problem">
      <ProblemIcon icon={problem.icon} />
      <ProblemHeading heading={problem.heading} />
      <ProblemParagraph paragraph={problem.paragraph} />
    </div>
  );
}

type IconName = keyof typeof Icons;
// eslint-disable-next-line import/namespace -- Dynamic import of icons by name from react-icons
const DynamicFontAwesomeIcon = ({ name }: { name: IconName }) => Icons[name];
function ProblemIcon({ icon }: { icon: TypeModuleProblemIcon }) {
  const Icon = DynamicFontAwesomeIcon({ name: icon.name as IconName });

  return <Icon className="m-product__problems__problem__icon" />;
}

function ProblemHeading({ heading }: { heading?: string }) {
  if (!heading) return null;
  return <h3 className="m-product__problems__problem__heading">{heading}</h3>;
}

function ProblemParagraph({ paragraph }: { paragraph?: string }) {
  if (!paragraph) return null;
  return (
    <p
      className="m-product__problems__problem__paragraph"
      dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
    />
  );
}
