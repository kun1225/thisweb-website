import './../../style/custom-portable-text.min.css';

// Sanity
import { client } from '@/lib/sanity/client';
import { SERVICE_QUERY } from '@/lib/sanity/queries';
import { ServiceType } from '@/lib/sanity/type';

// Component
import Image from 'next/image';
import CustomPortableText from '../_components/CustomPortableText';
import ProblemSection from '../_components/ProblemSection';
import { AiOutlineFrown } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { GiBrokenWall } from 'react-icons/gi';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa6';
import { FaRunning } from 'react-icons/fa';
import Stack from '../_components/Stack';
import Link from 'next/link';
import Button from '../_components/Button';
import Cal from './_components/Cal';

// Next
import Script from 'next/script';

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

export const metadata = {
  title: 'ThisWeb 請網這邊走 - 服務',
};

const servicePage = async () => {
  const services = await client.fetch<ServiceType[]>(
    SERVICE_QUERY,
    {},
    { next: { revalidate: 0 } },
  );

  const servicesIcons: any[] = [
    IoChatboxEllipsesOutline,
    FaLaptopCode,
    FaRunning,
  ];
  const servicesContent = services.map((service, index) => ({
    icon: servicesIcons[index],
    ...service,
  }));

  return (
    <>
      <div className="hero__bg absolute inset-0 min-h-screen"></div>
      <section className="service-page relative">
        <div className="min-h-[90vh] flex justify-between items-center">
          <div>
            <p className="text-3xl text-primary">嗨！我是請網這邊走 ThisWeb</p>
            <p>
              我在自學前端轉職的路上，遇到很多挫折，也多次迷茫過，
              <br />
              不知道放棄研究所走前端到底正不正確，也不知道該從哪裡學起，要學什麼。
            </p>
            <p>每次卡關時，我都很希望能有人引導我前進，讓學習更順利。</p>
          </div>
          <div>
            <Image
              alt="site owner"
              className="shadow-md shadow-gray-500 rounded-md"
              height={360}
              src="/images/siteOwner.jpg"
              width={360}
            />
          </div>
        </div>

        <div className="grid-paper-bg min-h-[80vh] grid place-content-center bg-gray-100 rounded-2xl shadow-lg shadow-gray-400">
          <p className="service-page__bridge__title text-3xl max-w-xl text-center bg-clip-text text-transparent leading-10">
            現在，我自學轉職成功了，
            我希望我也能盡我一份力量，幫助在前端的迷茫者。
          </p>
        </div>

        <ProblemSection
          problemTitle="如果你遇到這些問題"
          problemCardContent={problemCardContent}
          className="my-24"
        />

        <div className="grid place-content-center mb-32">
          <p className="text-2xl text-primary text-center">
            我提供這些服務，希望能夠幫助你在前端走的更順利
          </p>
        </div>

        <Stack direction="col" className="gap-32">
          {servicesContent.map(
            (
              { _id, title, icon: Icon, price, body, ctaLabel, ctaUrl },
              index,
            ) => (
              <Stack
                className="justify-between p-4 md:p-16 bg-gray-100 rounded-xl shadow-lg shadow-gray-400"
                key={_id}
              >
                <Stack className="gap-16 flex-col md:flex-row">
                  <Stack
                    direction="col"
                    className="gap-4 justify-start whitespace-nowrap"
                  >
                    <Icon className="text-4xl text-primary rounded-full shadow-md p-4 w-16 h-16" />
                    <h3 className="text-4xl font-semibold">
                      {index + 1}. {title}
                    </h3>
                    <span className="text-base">{price}</span>
                    <Link href={ctaUrl} target="_blank">
                      <Button className="md:w-full">{ctaLabel}</Button>
                    </Link>
                  </Stack>
                  <CustomPortableText value={body} />
                </Stack>
              </Stack>
            ),
          )}
        </Stack>
      </section>
    </>
  );
};

export default servicePage;
