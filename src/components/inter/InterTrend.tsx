"use client"

import { GlobeIcon, ShieldIcon, TrendingUpIcon, TargetIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

// 市场优势组件
interface InterTrendProps {
  className?: string
}

// 优势项数据接口
interface TrendItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

// 单个优势项组件
function TrendItem({ icon, title, description }: TrendItemProps) {
  return (
    <div className="flex gap-6 rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* 图标区域 */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
        {icon}
      </div>

      {/* 内容区域 */}
      <div className="flex-1">
        <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default function InterTrend({ className }: InterTrendProps) {
  // 四个优势项数据
  const trends: TrendItemProps[] = [
    {
      icon: <GlobeIcon className="h-8 w-8" />,
      title: "市场更大",
      description: "全球75亿人口，230个国家，海外市场远比国内庞大。棋牌手游在海外处于蓝海市场，竞争小，机会多。"
    },
    {
      icon: <ShieldIcon className="h-8 w-8" />,
      title: "运营自由",
      description: "海外大部分国家，尤其是欧美等发达地区，对棋牌类游戏政策宽松，运营限制少，支付渠道多样，收款自由便捷。"
    },
    {
      icon: <TrendingUpIcon className="h-8 w-8" />,
      title: "付费习惯",
      description: "发达地区手游市场付费习惯更普及，用户付费意愿强，ARPU值高，利润空间大。"
    },
    {
      icon: <TargetIcon className="h-8 w-8" />,
      title: "推广透明",
      description: "海外线上推广渠道更加集中，Facebook、Google等平台数据透明，推广效果可量化，ROI清晰可见。"
    }
  ]

  return (
    <section className={cn("bg-gradient-to-b from-gray-50 to-white py-16", className)}>
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">市场优势</h2>
          <p className="text-lg text-gray-500">Market Advantages</p>
        </div>

        {/* 垂直排列的优势项 */}
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {trends.map((trend, index) => (
            <TrendItem key={index} {...trend} />
          ))}
        </div>
      </div>
    </section>
  )
}
