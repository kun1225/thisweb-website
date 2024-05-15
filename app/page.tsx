import HeroBanner from './(root)/HeroBanner';
import ProblemSection from './_components/ProblemSection';
import SiteOwnerSection from './(root)/SiteOwnerSection';
import RecommendedPosts from './(root)/RecommendedPosts';
import IndexLoading from './_components/loadings/IndexLoading';
import { Suspense } from 'react';

import { AiOutlineFrown } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { GiBrokenWall } from 'react-icons/gi';

// Sanity Utils
import { client } from '@/lib/sanity/client';
import { LIMITED_POSTS_QUERY } from '@/lib/sanity/queries';
import { PostsType } from '@/lib/sanity/type';

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

  const posts = await client.fetch<PostsType>(LIMITED_POSTS_QUERY, {
    start: 0,
    end: 3
  })

  return (
    <Suspense fallback={<IndexLoading />}>
      <HeroBanner />
      <ProblemSection
          problemTitle="如果你遇到這些問題"
          problemCardContent={problemCardContent}
          className="c my-24"
        />
      <SiteOwnerSection />
      <RecommendedPosts limitedPosts={posts} />
    </Suspense>
  );
}
