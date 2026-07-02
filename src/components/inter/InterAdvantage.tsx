"use client"

import { cn } from "@/lib/utils"

// 优势展示组件
interface InterAdvantageProps {
  className?: string
}

// 优势项数据接口
interface AdvantageItemProps {
  description: string
}

export default function InterAdvantage({ className }: InterAdvantageProps) {
  // 四个优势项数据
  const advantages: AdvantageItemProps[] = [
    {
      description: "手游行业架构典范，技术实力过硬，十八年专注棋牌游戏开发，积累了丰富的行业经验和技术沉淀。"
    },
    {
      description: "英文版《Texas Hold'em》、《Rummy》、《Teen Patti》、《Ludo》等多款游戏已成功上线运营，深受海外用户好评。"
    },
    {
      description: "采用画面、特效最酷炫的U3D平台开发，支持iOS、Android、H5多端互通，提供极致的游戏体验。"
    },
    {
      description: "运维体系成熟，7*24小时轮班运维体系，提供服务器监控、数据分析、版本更新等全方位技术支持。"
    }
  ]

  return (
    <section className={cn("bg-gray-50 py-16", className)}>
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">优势展示</h2>
          <p className="text-lg text-gray-500">Our Advantages</p>
        </div>

        {/* 2x2网格布局 */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* 序号 */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                {index + 1}
              </div>
              {/* 描述文字 */}
              <p className="text-sm leading-relaxed text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
