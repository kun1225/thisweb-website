// lib
import { subscribeConvertKitEmail } from '@/lib/subscribeConvertKitEmail';

// Data
import { convertKitFormId } from '@/lib/convertKitFormId';
import Newsletter from './components/Newsletter';

const { heroFormId } = convertKitFormId;

function HeroBanner() {
  return (
    <>
      <div
        className="hero__bg absolute top-0 left-0 w-full h-[100svh]"
      ></div>
      <section
        className="relative min-h-[80svh] flex flex-col justify-center items-center gap-7 text-center"
      >
        <p className="text-xs tracking-widest">
          請網這邊走 ThisWeb | 前端 x 轉職 x 提升競爭力
        </p>
        <h2 className="font-semibold text-4xl lg:text-6xl leading-tight drop-shadow-lg">
          幫助你從零開始學習網頁程式
        </h2>
        <p>
          前端入門教學、JS
          核心觀念，快速上手網頁程式，學會核心技能，轉職更順利。
        </p>
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
    </>
  );
}

export default HeroBanner;
