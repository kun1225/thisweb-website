import type { IconType } from 'react-icons';

function ProblemCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: IconType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex-1 basis-40 p-4 md:p-8 flex flex-col items-center justify-center">
      <Icon className="w-8 h-8 mb-2 text-primary" />
      <p className="text-secondary text-lg">{title}</p>
      <p className="text-center">{desc}</p>
    </div>
  );
}

export default ProblemCard;
