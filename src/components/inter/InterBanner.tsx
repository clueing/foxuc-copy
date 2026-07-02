"use client"

import { cn } from "@/lib/utils"

// 联运介绍页面横幅组件
interface InterBannerProps {
  className?: string
}

export default function InterBanner({ className }: InterBannerProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        "h-[400px] w-full bg-gradient-to-r from-amber-900 via-orange-800 to-red-900",
        className
      )}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-orange-500 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-red-500 blur-[100px]" />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-[48px]">
          全球招募
        </h1>
        <p className="text-lg text-gray-200 md:text-[18px]">
          海外棋牌手游战略合作伙伴
        </p>
      </div>
    </section>
  )
}
