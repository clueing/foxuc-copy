"use client"

import { cn } from "@/lib/utils"

// 技术服务页面横幅组件
interface TechBannerProps {
  className?: string
}

export default function TechBanner({ className }: TechBannerProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        "h-[400px] w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900",
        className
      )}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500 blur-[100px]" />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-[48px]">
          专属定制
        </h1>
        <p className="text-lg text-gray-300 md:text-[18px]">
          迎合海外本土棋牌游戏特色
        </p>
      </div>
    </section>
  )
}
