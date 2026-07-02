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
        className="absolute left-[30px] top-1/2 -translate-y-1/2 z-20 w-[70px] h-[160px] bg-[url('/images/home/banner-focus.png')] bg-no-repeat bg-left hover:bg-[position:-70px_0] active:bg-[position:-140px_0] transition-all"
        aria-label="上一张"
      />

      {/* 右箭头 */}
      <button
        onClick={goToNext}
        className="absolute right-[30px] top-1/2 -translate-y-1/2 z-20 w-[70px] h-[160px] bg-[url('/images/home/banner-focus.png')] bg-no-repeat bg-[position:0_-160px] hover:bg-[position:-70px_-160px] active:bg-[position:-140px_-160px] transition-all"
        aria-label="下一张"
      />

      {/* 底部圆点导航 */}
      <div className="absolute bottom-[34px] left-1/2 -translate-x-1/2 z-20 h-[34px] leading-[34px] bg-[url('/images/home/banner-bottom.png')] bg-no-repeat px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "inline-block mx-[6px] rounded-full transition-all duration-300 align-middle",
              index === currentIndex
                ? "w-[14px] h-[14px] bg-[#e60000]"
                : "w-[10px] h-[10px] bg-[#333]"
            )}
            aria-label={`跳转到第 ${index + 1} 张幻灯片`}
          />
        ))}
      </div>
    </section>
  )
}
