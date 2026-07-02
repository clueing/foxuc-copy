"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// 产品轮播组件
interface InterProductsProps {
  className?: string
}

// 产品图片数据
const products = [
  { src: "/images/inter/product1.jpg", alt: "产品展示1" },
  { src: "/images/inter/product2.jpg", alt: "产品展示2" },
  { src: "/images/inter/product3.jpg", alt: "产品展示3" }
]

export default function InterProducts({ className }: InterProductsProps) {
  // 当前轮播索引
  const [currentIndex, setCurrentIndex] = useState(0)
  // 是否暂停自动轮播
  const [isPaused, setIsPaused] = useState(false)

  // 切换到下一张
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }, [])

  // 切换到上一张
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }, [])

  // 自动轮播效果
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(goToNext, 4000)
    return () => clearInterval(interval)
  }, [isPaused, goToNext])

  return (
    <section
      className={cn("bg-gray-50 py-16", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">产品展示</h2>
          <p className="text-lg text-gray-500">Product Showcase</p>
        </div>

        {/* 轮播区域 */}
        <div className="relative mx-auto max-w-4xl">
          {/* 图片容器 */}
          <div className="relative h-[450px] overflow-hidden rounded-lg">
            {products.map((product, index) => (
              <div
                key={product.src}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* 左箭头 */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/50"
            aria-label="上一张"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* 右箭头 */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/50"
            aria-label="下一张"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* 底部圆点导航 */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-3 w-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/75"
                )}
                aria-label={`跳转到第 ${index + 1} 张图片`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
