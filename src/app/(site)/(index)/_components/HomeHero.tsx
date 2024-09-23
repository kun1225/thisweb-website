// Components
import { Button } from '@/src/app/_components/Button';
import Link from 'next/link';
import Rotate3dEffect from '../../../_components/effect/Rotate3dEffect';

export default function HomeHero() {
  return (
    <>
      <div className="p-home__hero__bg" />
      <div className="overflow-hidden">
        <section className="p-home__hero">
          <h2 className="tracking-widest text-gray-500">
            請網這邊走 ThisWeb | 前端 x 轉職 x 提升競爭力
          </h2>
          <Rotate3dEffect amplitude={{ x: 0.05, y: 0.2 }} className="p-0 mb-2">
            <h1 className="p-home__hero__heading shine-text">
              幫助你從零開始學習網頁前端
              <br />
              轉職更順利
            </h1>
          </Rotate3dEffect>
          <Link href="/posts/page/0" className="">
            <Button size="hero">開始學習</Button>
          </Link>
        </section>
      </div>
    </>
  );
}
