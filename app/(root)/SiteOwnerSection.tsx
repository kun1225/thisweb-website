import Image from 'next/image';

function SiteOwnerSection() {
  return (
    <section className="md:px-8 pt-8 mb-32 text-sm">
      <h2 className="text-2xl text-center md:mb-8 drop-shadow-md">
        別擔心，讓我來幫助你
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8">
        <div className="flex-1 basis-1/3 grid place-content-center p-10">
          <Image
            alt="site owner"
            className="shadow-md shadow-gray-500 rounded-md"
            height={360}
            src="/images/siteOwner.jpg"
            width={360}
          />
        </div>
        <div className="flex-1 basis-2/3 flex flex-col gap-4 leading-6">
          <p className="text-gray-500 text-xs tracking-widest">
            “做網站應該是件有趣且超酷的事情”
          </p>
          <p>
            嗨！ 我是站長楊杉。
            我和很多人一樣，也是想轉職成前端工程師的非本科生。
            自學路上，我遇到很多挫折。
            每次卡關時，我都很希望台灣能有完整的中文學習資源，讓我學習更順利。
          </p>
          <p>
            我成立「請網這邊走」的目的，就是想分享完整的中文學習資源，希望能幫助和我一樣在轉職路上努力的你，少走一些彎路。
          </p>
        </div>
      </div>

      <div className="flex justify-center h-[1px] mb-8">
        <div className="border-b-2 border-gray-500 border-dotted w-[100px]" />
      </div>

      <div className="flex flex-col gap-2 items-center text-center">
        <p>
          我會提供一系列的前端教學文章，並用初學者的角度，帶你能打好基礎，完善學習。
        </p>
        <p>
          我也會提供多個專案教學，讓你能運用所學的知識，快速上手前端程式設計。
        </p>
        <p>那就讓我們開始吧！</p>
        {/* <Button className="mt-8">開始你的前端之旅</Button> */}
      </div>
    </section>
  );
}

export default SiteOwnerSection;
