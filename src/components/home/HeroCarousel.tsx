"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

/* 幻灯片数据 */
const slides = [
  {
    id: 1,
    title: "U3D至尊版",
    subtitle: "全新框架，精心力作",
    descriptions: ["博弈海外棋牌市场", "全新风格更符主流审美", "英葡主流双语畅游海外"],
    link: "/product/hw",
    image: "/images/home/banner1.jpg",
    subtitleColor: "text-[#13e7d9]",
    titleColor: "text-white",
    descColor: "text-white",
    btnBg: "bg-white",
    btnColor: "text-[#222]",
  },
  {
    id: 2,
    title: "H5环球版",
    subtitle: "三端互通，灵活运营",
    descriptions: ["全新Cocos-Creator引擎，TS语言开发", "一套代码，三个终端", "平台数据互通，降低运营成本"],
    link: "/product/zy",
    image: "/images/home/banner2.jpg",
    subtitleColor: "text-[#87e38f]",
    titleColor: "text-white",
    descColor: "text-white",
    btnBg: "bg-white",
    btnColor: "text-[#222]",
  },
  {
    id: 3,
    title: "H5极速版",
    subtitle: "更轻量，更高效的移动平台方案",
    descriptions: ["专注移动端交互体验", "兼容性强，加载轻量", "快速满足运营需求"],
    link: "/product/qj",
    image: "/images/home/banner3.jpg",
    subtitleColor: "text-[#f796ff]",
    titleColor: "text-white",
    descColor: "text-white",
    btnBg: "bg-white",
    btnColor: "text-[#222]",
  },
  {
    id: 4,
    title: "全球招募",
    subtitle: "海外棋牌手游战略合作伙伴",
    descriptions: ["为海内外合法棋牌运营商提供线上平台服务", "百人技术团队引领棋牌行业研发技术", "一对一全方位专属客服和技术指导"],
    link: "/inter",
    image: "/images/home/banner4.jpg",
    subtitleColor: "text-[#a73f1d]",
    titleColor: "text-[#222]",
    descColor: "text-[#222]",
    btnBg: "bg-[#222]",
    btnColor: "text-white",
  },
  {
    id: 5,
    title: "全球棋牌游戏定制开发",
    subtitle: "海外棋牌手游战略合作伙伴",
    descriptions: ["为海内外合法棋牌运营商提供线上平台服务", "百人技术团队引领棋牌行业研发技术", "一对一全方位专属客服和技术指导"],
    link: "/product/hw",
    image: "/images/home/banner5.jpg",
    subtitleColor: "text-[#70d2ff]",
    titleColor: "text-white",
    descColor: "text-white",
    btnBg: "bg-white",
    btnColor: "text-[#222]",
    centered: true,
  },
  {
    id: 6,
    title: "18年棋牌游戏服务商",
    subtitle: "不忘初心，一路伴行",
    descriptions: ["为海内外合法棋牌运营商提供线上平台服务", "百人技术团队引领棋牌行业研发技术", "一对一全方位专属客服和技术指导"],
    link: "/about",
    image: "/images/home/banner6.jpg",
    subtitleColor: "text-[#ef4ead]",
    titleColor: "text-[#222]",
    descColor: "text-[#222]",
    btnBg: "bg-[#222]",
    btnColor: "text-white",
  },
  {
    id: 7,
    title: "倡导绿色健康游戏",
    subtitle: "文明游戏，禁止赌博",
    descriptions: ["为海内外合法棋牌运营商提供线上平台服务", "百人技术团队引领棋牌行业研发技术", "一对一全方位专属客服和技术指导"],
    link: "/product/hw",
    image: "/images/home/banner7.jpg",
    subtitleColor: "text-[#7e00ff]",
    titleColor: "text-[#222]",
    descColor: "text-[#222]",
    btnBg: "bg-[#222]",
    btnColor: "text-white",
    centered: true,
  },
]

/* 轮播组件 */
export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isPaused, goToNext])

  return (
    <section
      className="relative w-full h-[580px] overflow-hidden min-w-[1250px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 幻灯片容器 */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1920px] h-[580px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            {/* 背景图 */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-top"
              priority={index === 0}
            />

            {/* 内容区域 */}
            <div
              className={cn(
                "absolute top-[146px] left-[460px]",
                slide.centered && "left-1/2 -translate-x-1/2 text-center"
              )}
            >
              <h1 className={cn("text-[58px] font-bold leading-tight", slide.titleColor)}>
                {slide.title}
              </h1>
              <p className={cn("text-[32px] font-light mt-1", slide.subtitleColor)}>
                {slide.subtitle}
              </p>
              <div className="w-[140px] h-[1px] my-3 bg-white/50" />
              {slide.descriptions.map((desc, i) => (
                <p key={i} className={cn("text-[16px] mb-1", slide.descColor)}>
                  {desc}
                </p>
              ))}
              <Link
                href={slide.link}
                className={cn(
                  "inline-flex items-center gap-2 mt-[46px] w-[140px] h-[42px] rounded-[9px] transition-all duration-200",
                  slide.btnBg,
                  slide.btnColor
                )}
              >
                <span className="ml-4">了解更多</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 左箭头 */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/50"
        aria-label="上一张"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* 右箭头 */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/50"
        aria-label="下一张"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 底部圆点导航 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`跳转到第 ${index + 1} 张幻灯片`}
          />
        ))}
      </div>
    </section>
  )
}
