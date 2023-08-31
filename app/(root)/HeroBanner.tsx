import Image from "next/image"
import Link from 'next/link'
import Button from "../components/Button"

const HeroBanner = () => {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row md:gap-16 mb-32">

      <div className="flex-1 basis-1/2 md:basis-2/3 flex flex-col justify-center gap-4 text-center md:text-left">
        <p className="text-sm font-light tracking-widest text-gray-500">請網這邊走 ThisWeb</p>
        <h2 className="text-4xl md:text-5xl md:leading-tight leading-tight">幫助你從零開始學習網頁程式</h2>
        <p>提供完整入門教學、JS 核心觀念講解，以及實作教學，讓你快速上手網頁程式。</p>
      </div>

      <div className="flex-1 basis-1/2 md:basis-1/3 relative">
        <Image src="/heroBanner.svg" fill alt="hero banner" priority></Image>
      </div>

    </section>
  )
}

export default HeroBanner