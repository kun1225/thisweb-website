import './style.css';

// Sanity
import { client } from '@/src/libs/sanity/client';
import { SERVICE_QUERY } from '@/src/libs/sanity/queries';
import { ServiceType } from '@/src/libs/sanity/type';

// Component
import Image from 'next/image';
import CustomPortableText from '../../_components/CustomPortableText';

import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa6';
import { FaRunning } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '../../_components/Button';
// import Cal from './_components/Cal';
import NumberCounter from '../../_components/effect/NumberCounter';
import Rotate3dEffect from '../../_components/effect/Rotate3dEffect';

export const metadata = {
  title: 'ThisWeb 請網這邊走 - 服務',
};

const servicePage = async () => {
  const services = await client.fetch<ServiceType[]>(SERVICE_QUERY);

  const servicesIcons: any[] = [IoChatboxEllipsesOutline, FaLaptopCode, FaRunning];
  const servicesContent = services.map((service, index) => ({
    icon: servicesIcons[index],
    ...service,
  }));

  return (
    <>
      <div className="service-page hero__bg absolute inset-0 min-h-screen" />
      <section className="service-page relative">
        <div className="mb-28 mt-16 flex min-h-[70vh] items-center justify-center gap-[10vw] c">
          <div className="flex flex-col items-center gap-8 text-center md:text-left">
            <h3 className="text-center text-body font-semibold text-neutral-950 md:text-body-large">
              ThisWeb 前端職涯諮詢＆轉職陪跑教練服務
            </h3>
            <h1 className="service-page__title mb-4 text-center text-4xl font-semibold !leading-[1.5] text-primary md:text-5xl">
              打造高效學習與目標管理系統
              <br />
              轉職前端更順利
            </h1>

            <Link
              href="https://cal.com/thisweb/career-counseling?user=thisweb&date=2024-05-23&month=2024-05"
              target="_blank"
            >
              <Button>預約諮詢</Button>
            </Link>
          </div>
        </div>

        <div className="text-center c">
          <p className="mx-auto md:max-w-3xl">
            轉職前端是一條漫長又煎熬的路，很多時候我們會停滯不前，並不是因為缺乏學習資源，而是不清楚如何有效的管理自己的學習和目標，
            <br />
            <br />
            <strong>這也是為什麼許多人花了昂貴的學費買課程，卻還是無法順利轉職。</strong>
          </p>
        </div>

        <div className="mt-32 flex flex-col items-center text-center c">
          <p className="text-3xl font-semibold text-primary">
            👋 我是 ThisWeb，我在轉職路上也迷茫過
          </p>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-[4w]">
            <Rotate3dEffect amplitude={0.1} className="text-primary">
              <div className="min-w-[320px]">
                <Image
                  alt="site owner"
                  className="flex-shrink-0 rounded-md shadow-md shadow-gray-500"
                  height={360}
                  src="/images/siteOwner.jpg"
                  width={360}
                />
              </div>
            </Rotate3dEffect>
            <p className="text-center md:max-w-2xl md:text-left">
              在即將從機械系畢業前，我發現我很討厭自己的科系，毅然放棄研究所，決定培養其它專長，另找出路。
              <br />
              <br />
              然而身為從零開始自學前端的非本科生，我在轉職路上經歷過無數挫折和迷茫。深知轉職是條不容易的道路。儘管網路上資源很多，或是買了課程上課，也不一定能順利達成轉職的目標。
              <br />
              <br />
              但我後來經過摸索，我慢慢找到一套適合我自己的學習與目標管理系統，
              <br />
              <br />
              這套系統除了
              <strong>
                幫助我在一年內轉職成功，還讓我有辦法同時經營自媒體，並分享前端教學內容幫助，達到以下成就
                👇。
              </strong>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-[4vw]">
            <div className="flex grow items-center justify-center gap-2 rounded-md border-2 border-gray-300 bg-pure-white p-12 shadow-lg">
              <div className="flex items-center gap-1 text-5xl font-semibold text-secondary">
                <NumberCounter value={5800} />
                <span>+</span>
              </div>
              <p className="text-sm">IG 追蹤數</p>
            </div>
            <div className="flex grow items-center justify-center gap-2 rounded-md border-2 border-gray-300 bg-pure-white p-12 shadow-lg">
              <div className="flex items-center gap-1 text-5xl font-semibold text-secondary">
                <NumberCounter value={100} />
                <span>+</span>
              </div>
              <p className="text-sm">累積前端教學文章</p>
            </div>
            <div className="flex grow items-center justify-center gap-2 rounded-md border-2 border-gray-300 bg-pure-white p-12 shadow-lg">
              <div className="flex items-center gap-1 text-5xl font-semibold text-secondary">
                <NumberCounter value={50} />
                <span>+</span>
              </div>
              <p className="text-sm">累積諮詢人數</p>
            </div>
          </div>
          <strong className="mt-16">我也希望我也能透過這套系統，幫助你轉職成功。</strong>

          <Link
            href="https://cal.com/thisweb/career-counseling?user=thisweb&date=2024-05-23&month=2024-05"
            target="_blank"
            className="mt-16"
          >
            <Button>預約諮詢</Button>
          </Link>
        </div>

        <div className="relative mt-32 py-16">
          <div className="pointer-events-none absolute -left-20 -top-52 h-[40vw] w-[50vw] -skew-x-12 rounded-full bg-secondary opacity-5 blur-lg" />
          <div className="pointer-events-none absolute -bottom-40 -right-0 h-[20vw] w-[60vw] -skew-y-12 rounded-full bg-secondary opacity-5 blur-lg" />

          <div className="flex flex-col items-center gap-8 text-center c">
            <p className="text-3xl font-semibold text-primary">
              從前端小白到前端工程師：三個步驟帶你成功轉職
            </p>
            <p>
              我會根據我自身轉職成功的經驗，幫助你也打造最適合自己的學習和目標管理系統。
              <br />
              我會分成三個步驟 👇
            </p>
            <div className="flex flex-col items-stretch justify-between gap-[2vw] md:flex-row">
              <div className="flex flex-col gap-4 rounded-md border-2 border-gray-300 bg-pure-white p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary">01. 一對一諮詢</h3>
                <p className="max-w-lg">
                  轉職過程中最怕的就是遇到問題找不到解答，我會根據自身轉職經驗幫助你定位問題，從根本解決你的困難。
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-md border-2 border-gray-300 bg-pure-white p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary">02. 客製化教學</h3>
                <p className="max-w-lg">
                  我會根據你的軟硬實力，提供客製化的教學和學習資源，幫助你掌握前端知識與求職的關鍵技能。
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-md border-2 border-gray-300 bg-pure-white p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary">03. Notion 目標管理模板</h3>
                <p className="max-w-lg">
                  量身規劃目標，並可視化的管理目標：我會分享過去兩年自學前端使用的知識與目標管理模板以及各種學習資源，幫助你建立高效學習的能力，避開轉職路上的彎路和瓶頸。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-24 grid place-content-center c">
          <p className="mb-12 text-center text-3xl font-semibold text-primary">
            如果你已經下定決心轉職，可以參考以下服務：
          </p>
          <ul className="flex flex-col gap-32">
            {servicesContent.map(
              ({ _id, title, icon: Icon, price, body, ctaLabel, ctaUrl }, index) => {
                const direction = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';
                return (
                  <li
                    className="flex justify-between rounded-xl bg-pure-white p-6 shadow-lg shadow-gray-400 md:p-16"
                    key={_id}
                  >
                    <div className={`flex flex-col gap-[4vw] ${direction}`}>
                      <div className="flex flex-col justify-start gap-4 whitespace-nowrap">
                        <Icon className="h-16 w-16 rounded-full p-4 text-4xl text-primary shadow-lg shadow-gray-400" />
                        <h3 className="text-4xl font-semibold">
                          {index + 1}. {title}
                        </h3>
                        <span className="text-base">{price}</span>
                        <Link href={ctaUrl} target="_blank">
                          <Button className="text-lg md:w-full">{ctaLabel}</Button>
                        </Link>
                      </div>
                      <div className="prose">
                        <CustomPortableText value={body} />
                      </div>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default servicePage;
