"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// 幻灯片数据
const slides = [
  {
    id: 1,
    title: "U3D至尊版",
    subtitle: "全新框架，精心力作",
    description: "博弈海外棋牌市场、全新风格更符主流审美、英葡主流双语畅游海外",
    link: "/product/hw",
    bgClass: "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900",
  },
  {
    id: 2,
    title: "H5环球版",
    subtitle: "三端互通，灵活运营",
    description: "全新Cocos-Creator引擎，TS语言开发、一套代码，三个终端、平台数据互通，降低运营成本",
    link: "/product/zy",
    bgClass: "bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900",
  },
  {
    id: 3,
    title: "H5极速版",
    subtitle: "更轻量，更高效的移动平台方案",
    description: "专注移动端交互体验、兼容性强，加载轻量、快速满足运营需求",
    link: "/product/qj",
    bgClass: "bg-gradient-to-br from-cyan-900 via-teal-800 to-emerald-900",
  },
  {
    id: 4,
    title: "全球招募",
    subtitle: "海外棋牌手游战略合作伙伴",
    description: "为海内外合法棋牌运营商提供线上平台服务、百人技术团队引领棋牌行业研发技术、一对一全方位专属客服和技术指导",
    link: "/inter",
    bgClass: "bg-gradient-to-br from-orange-900 via-red-800 to-rose-900",
  },
  {
    id: 5,
    title: "全球棋牌游戏定制开发",
    subtitle: "海外棋牌手游战略合作伙伴",
    description: "为海内外合法棋牌运营商提供线上平台服务、百人技术团队引领棋牌行业研发技术、一对一全方位专属客服和技术指导",
    link: "/product/hw",
    bgClass: "bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900",
  },
  {
    id: 6,
    title: "18年棋牌游戏服务商",
    subtitle: "不忘初心，一路伴行",
    description: "为海内外合法棋牌运营商提供线上平台服务、百人技术团队引领棋牌行业研发技术、一对一全方位专属客服和技术指导",
    link: "/about",
    bgClass: "bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900",
  },
  {
    id: 7,
    title: "倡导绿色健康游戏",
    subtitle: "文明游戏，禁止赌博",
    description: "为海内外合法棋牌运营商提供线上平台服务、百人技术团队引领棋牌行业研发技术、一对一全方位专属客服和技术指导",
    link: "/product/hw",
    bgClass: "bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900",
  },
]

export default function HeroCarousel() {
  // 当前幻灯片索引
  const [currentIndex, setCurrentIndex] = useState(0)
  // 是否暂停自动轮播
  const [isPaused, setIsPaused] = useState(false)

  // 切换到下一张幻灯片
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  // 切换到上一张幻灯片
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // 跳转到指定幻灯片
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // 自动轮播效果
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, goToNext])

  // 鼠标悬停时暂停轮播
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section
      className="relative w-full h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 幻灯片容器 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
              slide.bgClass,
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            {/* 幻灯片内容 */}
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-white/90">
                {slide.subtitle}
              </h2>
              <p className="text-base md:text-lg mb-8 text-white/80 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <Link
                href={slide.link}
                className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
              >
                了解更多
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
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* 右箭头 */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/50"
        aria-label="下一张"
      >
        <ChevronRight className="w-6 h-6" />
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
