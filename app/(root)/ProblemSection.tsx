// Component
import { AiOutlineFrown } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { GiBrokenWall } from 'react-icons/gi';
import Stack from '@/app/components/Stack';
import ProblemCard from './components/ProblemCard';

const problemCardContent = [
  {
    icon: AiOutlineFrown,
    title: '知識焦慮',
    desc: '網路上太多教學，不知從何學起',
  },
  {
    icon: BsCodeSlash,
    title: '不知道如何實作',
    desc: '掌握基礎知識後，不知道如何應用在實際專案中',
  },
  {
    icon: IoLanguageOutline,
    title: '語言障礙',
    desc: '中文資訊不夠完整，英文又看不是很懂',
  },
  {
    icon: GiBrokenWall,
    title: '學習遇到瓶頸',
    desc: '擔心自己跟不上周遭同儕，覺得沒自信',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <Stack as="section" className="text-center mb-32" direction="col" gap={8}>
      <h2 className="text-2xl md:mb-8 drop-shadow-md">
        自學程式的你也遇過這些問題嗎?
      </h2>

      <Stack gap={8} wrap>
        {problemCardContent.map(({ icon, title, desc }) => (
          <ProblemCard desc={desc} icon={icon} key={title} title={title} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProblemSection;
