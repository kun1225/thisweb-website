// lib
import { subscribeConvertKitEmail } from '@/lib/subscribeConvertKitEmail';

// Data
import { convertKitFormId } from '@/lib/convertKitFormId';
import Newsletter from './_components/Newsletter';

// Components
import Button from '../_components/Button';
import Link from 'next/link';
import Rotate3dEffect from '../_components/effect/Rotate3dEffect';

const { heroFormId } = convertKitFormId;

function HeroBanner() {
  return (
    <>
      <div className="hero__bg absolute top-0 left-0 w-full h-[100svh]" />
      <div className="overflow-hidden">
        <section className="relative min-h-[80svh] flex flex-col justify-center items-center gap-10 text-center">
          <p className="tracking-widest text-gray-500">
            請網這邊走 ThisWeb | 前端 x 轉職 x 提升競爭力
          </p>
          <Rotate3dEffect amplitude={{ x: 0.05, y: 0.2 }} className="p-0 mb-2">
            <h2 className="shine-text font-semibold text-4xl lg:text-6xl !leading-[1.2]">
              幫助你從零開始學習網頁前端
              <br />
              轉職更順利
            </h2>
          </Rotate3dEffect>
          {/* <p className='max-w-sm text-gray-500'>
          前端入門教學、JS
          核心觀念，快速上手網頁程式，學會核心技能，轉職更順利。
        </p> */}
          <Link href="/posts/page/0" className="">
            <Button>開始學習</Button>
          </Link>
          {/* <p className="mt-2 border-t-2 pt-4">
          加入<span className="text-secondary">電子報</span>，每週三準時收到 1
          篇前端的技術文章。
        </p>
        <Newsletter
          data-testid="newsletter"
          formId={heroFormId}
          onSubscribe={subscribeConvertKitEmail}
        /> */}
        </section>
      </div>
    </>
  );
}

export default HeroBanner;
