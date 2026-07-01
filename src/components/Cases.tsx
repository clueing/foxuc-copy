"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons"

// 案例数据接口
interface CaseItemProps {
  id: number
  name: string
  image: string
}

export default function Cases() {
  // 案例数据
  const cases: CaseItemProps[] = [
    { id: 1, name: "吉祥游戏中心", image: "/images/cooperation/1.png" },
    { id: 2, name: "快乐吧游戏中心", image: "/images/cooperation/2.png" },
    { id: 3, name: "金游世界游戏中心", image: "/images/cooperation/3.png" },
    { id: 4, name: "亿酷棋牌世界", image: "/images/cooperation/4.png" },
    { id: 5, name: "盛唐游戏中心", image: "/images/cooperation/5.png" },
    { id: 6, name: "中国游戏中心", image: "/images/cooperation/6.png" },
    { id: 7, name: "吉祥游戏中心", image: "/images/cooperation/1.png" }
  ]

  // 滚动容器引用
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  // 当前滚动位置（用于检测滚动状态）
  const [, setScrollPosition] = useState(0)
  // 是否可以向左滚动
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  // 是否可以向右滚动
  const [canScrollRight, setCanScrollRight] = useState(true)

  // 检查滚动状态
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setScrollPosition(scrollLeft)
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // 监听滚动事件
  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollPosition)
      checkScrollPosition()
      return () => container.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  // 向左滚动
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 // 卡片宽度 + 间距
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
      })
    }
  }

  // 向右滚动
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 // 卡片宽度 + 间距
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">超过300家成功合作案例</h2>
        </div>

        {/* 轮播区域 */}
        <div className="relative">
          {/* 左箭头 */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={cn(
              "absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all duration-200",
              canScrollLeft ? "hover:bg-red-500 hover:text-white" : "cursor-not-allowed opacity-50"
            )}
            aria-label="向左滚动"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>

          {/* 案例卡片滚动容器 */}
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto px-8 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="group flex w-64 shrink-0 flex-col items-center rounded-lg bg-gray-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* 案例图片 */}
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={caseItem.image}
                    alt={caseItem.name}
                    className="h-32 w-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* 案例名称 */}
                <h3 className="text-center text-sm font-medium text-gray-700 transition-colors group-hover:text-red-500">
                  {caseItem.name}
                </h3>
              </div>
            ))}
          </div>

          {/* 右箭头 */}
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={cn(
              "absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all duration-200",
              canScrollRight ? "hover:bg-red-500 hover:text-white" : "cursor-not-allowed opacity-50"
            )}
            aria-label="向右滚动"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
