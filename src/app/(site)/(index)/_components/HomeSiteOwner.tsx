import Image from 'next/image';

export default function HomeSiteOwner() {
  return (
    <section className="p-home__site-owner">
      <h2 className="p-home__site-owner__heading">別擔心，讓我來幫助你</h2>

      <div className="p-home__site-owner__content">
        <Image
          alt="ThisWeb"
          className="p-home__site-owner__img"
          height={320}
          width={320}
          src="/images/siteOwner.jpg"
        />
        <div className="p-home__site-owner__desc">
          <p className="text-sm tracking-widest">
            “做網站應該是件有趣且超酷的事情”
          </p>
          <p>
            嗨！ 我是請網這邊走 This Web。
            我和很多人一樣，也是想轉職成前端工程師的非本科生。
            自學路上，我遇到很多挫折。
            每次卡關時，我都很希望台灣能有完整的中文學習資源，讓我學習更順利。
          </p>
          <p>
            我成立「請網這邊走」的目的，就是想分享完整的中文學習資源，希望能幫助和我一樣在轉職路上努力的你，少走一些彎路。
          </p>
        </div>
      </div>
    </section>
  );
}
