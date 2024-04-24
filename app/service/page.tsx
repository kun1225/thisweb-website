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
        <div className="min-h-[60vh] mt-8 mb-32 flex gap-[2vw] flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="text-center md:text-left max-w-2xl">
            <p className="text-3xl font-semibold text-primary mb-8">
              你也在轉職前端路上奮鬥嗎？
            </p>
            <p>
              嗨！我是請網這邊走 ThisWeb
              <br />
              <br />
              身為從零開始自學前端的非本科生，我在轉職路上吃了不少苦頭。除了學習技術、實作專案、準備面試等累積硬實力的挫折外，<strong>更多的是獨自奮鬥時的壓力、焦慮和自我懷疑，讓我經常對未來感到迷茫</strong>。
              <br />
              <br />
              回顧一路上，除了有家人、朋友和書本陪伴我度過難關，我也很慶幸自己在最困難的時刻，有前輩的提點，幫助我釐清自己的問題，找回繼續前進的動力。
            </p>
          </div>
          <div className='min-w-[240px]'>
            <Image
              alt="site owner"
              className="shadow-md shadow-gray-500 rounded-md flex-shrink-0"
              height={360}
              src="/images/siteOwner.jpg"
              width={360}
            />
          </div>
        </div>

        <div className="grid-paper-bg p-6 min-h-[40vh] grid place-content-center bg-gray-100 rounded-2xl shadow-lg shadow-gray-400">
          <p className="service-page__bridge__title text-2xl max-w-xl text-center bg-clip-text text-transparent leading-10">
            現在，我已經轉職成功，也希望可以用過去幾年的經驗，
            <br />
            <br />
            幫助你在前端路上走的更順利！
          </p>
        </div>


        <div className="grid place-content-center my-48">
          <p className="text-2xl text-primary font-semibold text-center mb-4">服務方案說明</p>
          <p className="text-center max-w-2xl">
            目前提供三種一對一服務方案，<strong>都會從「前端職涯諮詢」開始</strong>。
            <br/>
            諮詢結束後，會再根據你的狀況評估是否需要進一步的客製化教學或是長期陪跑計畫。
          </p>
        </div>

        <Stack direction="col" className="gap-32">
          {servicesContent.map(
            (
              { _id, title, icon: Icon, price, body, ctaLabel, ctaUrl },
              index,
            ) => {
              const direction = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';
              return (
                <Stack
                  className="justify-between p-6 md:p-16 bg-gray-100 rounded-xl shadow-lg shadow-gray-400"
                  key={_id}
                >
                  <Stack className={`gap-[4vw] flex-col ${direction}`}>
                    <Stack
                      direction="col"
                      className="gap-4 justify-start whitespace-nowrap"
                    >
                      <Icon className="text-4xl text-primary rounded-full shadow-gray-400 shadow-lg p-4 w-16 h-16" />
                      <h3 className="text-4xl font-semibold">
                        {index + 1}. {title}
                      </h3>
                      <span className="text-base">{price}</span>
                      <Link href={ctaUrl} target="_blank">
                        <Button className="md:w-full text-lg">{ctaLabel}</Button>
                      </Link>
                    </Stack>
                    <CustomPortableText value={body} />
                  </Stack>
                </Stack>
              )
            },
          )}
        </Stack>
      </section>
    </>
  );
};

export default servicePage;
