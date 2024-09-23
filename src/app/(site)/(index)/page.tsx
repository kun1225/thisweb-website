import HomeHero from './_components/HomeHero';
import ProblemSection from '../../_components/ProblemSection';
import SiteOwnerSection from './_components/SiteOwnerSection';
import RecommendedPosts from './_components/RecommendedPosts';

import { AiOutlineFrown } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { GiBrokenWall } from 'react-icons/gi';

// Sanity Utils
import { sanityFetch } from '@/src/libs/sanity/client';
import { LIMITED_POSTS_QUERY } from '@/src/libs/sanity/queries';
import { PostsType } from '@/src/libs/sanity/type';

const problemCardContent = [
  {
    icon: AiOutlineFrown,
    title: '知識焦慮',
    desc: '網路上太多教學，不知道從何學起',
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

export default async function Home() {
  const posts = await sanityFetch<PostsType>({
    query: LIMITED_POSTS_QUERY,
    queryParams: {
      start: 0,
      end: 3,
    },
    tags: ['post'],
  });

  return (
    <>
      <HomeHero />
      <ProblemSection
        problemTitle="如果你遇到這些問題"
        problemCardContent={problemCardContent}
        className="c my-24"
      />
      <SiteOwnerSection />
      <RecommendedPosts limitedPosts={posts} />
    </>
  );
}
