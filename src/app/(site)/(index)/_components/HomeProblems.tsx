// Components
import { AiOutlineFrown } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { GiBrokenWall } from 'react-icons/gi';

const problemCardContent = [
  {
    icon: AiOutlineFrown,
    title: '知識焦慮',
    desc: '網路上太多教學，不知道從何學起。',
  },
  {
    icon: BsCodeSlash,
    title: '不知道如何實作',
    desc: '掌握基礎知識後，不知道如何應用在實際專案中。',
  },
  {
    icon: IoLanguageOutline,
    title: '語言障礙',
    desc: '中文資訊不夠完整，英文又看不是很懂。',
  },
  {
    icon: GiBrokenWall,
    title: '學習遇到瓶頸',
    desc: '擔心自己跟不上周遭同儕，覺得沒自信。',
  },
];

export default function HomeProblems() {
  return (
    <section className="p-home__problems">
      <h2 className="p-home__problems__heading">如果你遇到這些問題</h2>
      <div className="p-home__problems__content">
        {problemCardContent.map(({ icon: Icon, title, desc }) => (
          <div className="p-home__problems__item" key={title}>
            <Icon className="p-home__problems__item__icon" />
            <h3 className="p-home__problems__item__title">{title}</h3>
            <p className="p-home__problems__item__desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
