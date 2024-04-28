import Stack from './Stack';
interface ProblemSectionProps {
  problemCardContent: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    desc: string;
  }[];
  problemTitle?: string;
  className?: React.HTMLProps<HTMLElement>['className'];
}

const ProblemSection: React.FC<ProblemSectionProps> = ({
  problemCardContent,
  problemTitle,
  className
}) => {
  return (
    <Stack as="section" className={`text-center ${className}`} direction="col" gap={8}>
        {problemTitle && <h2 className="text-2xl md:mb-8 drop-shadow-md">{problemTitle}</h2>}
      <Stack gap={8} wrap>
        {problemCardContent.map(({ icon: Icon, title, desc }) => (
          <div className="flex-1 basis-40 p-4 md:p-8 flex flex-col items-center gap-2" key={title}>
            <Icon className="w-16 h-16 p-4 mb-4 text-primary bg-gray-100 rounded-2xl shadow-md " />
            <h4 className="text-secondary text-2xl">{title}</h4>
            <p className="text-center">{desc}</p>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProblemSection;
