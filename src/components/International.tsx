"use client"

import { useState } from "react"
import ContactPopup from "./ContactPopup"

// 国际市场优势区组件
interface AdvantageCardProps {
  title: string
  description: string
  subtitle: string
  englishTitle: string
}

function AdvantageCard({ title, description, subtitle, englishTitle }: AdvantageCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* 顶部装饰线 */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 to-orange-500" />
      
      <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
      <p className="mb-4 text-sm text-gray-600 leading-relaxed">{description}</p>
      
      <div className="border-t border-gray-100 pt-4">
        <p className="text-lg font-semibold text-red-500">{subtitle}</p>
        <p className="text-sm text-gray-500">{englishTitle}</p>
      </div>
      
      {/* 悬停装饰效果 */}
      <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-red-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}

export default function International() {
  // 控制联系弹窗显示/隐藏
  const [isContactOpen, setIsContactOpen] = useState(false)

  // 四个优势卡片数据
  const advantages: AdvantageCardProps[] = [
    {
      title: "市场更大",
      description: "全球75亿人口，230个国家，海外市场远比国内庞大，棋牌手游在海外处于蓝海市场，竞争小，机会多。",
      subtitle: "万亿市场",
      englishTitle: "Trillions of markets"
    },
    {
      title: "运营自由",
      description: "海外大部分国家对棋牌类游戏政策宽松，运营限制少，支付渠道多样，收款自由便捷。",
      subtitle: "联运纵横",
      englishTitle: "Combined transportation"
    },
    {
      title: "付费习惯",
      description: "发达地区手游市场成熟，用户付费意愿强，ARPU值高，利润空间大。",
      subtitle: "围猎高端",
      englishTitle: "Targeting high-end market"
    },
    {
      title: "推广透明",
      description: "海外线上推广渠道成熟，Facebook、Google等平台数据透明，推广效果可量化。",
      subtitle: "突破桎梏",
      englishTitle: "Break through the shackles"
    }
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">国际 大势所趋</h2>
          <p className="text-lg text-gray-500">Overseas an irresistable trend</p>
          {/* 了解更多按钮 - 点击弹出联系二维码 */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="mt-6 rounded-lg bg-red-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-600"
          >
            了解更多
          </button>
        </div>

        {/* 4列卡片布局 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>
      </div>

      {/* 联系二维码弹窗 */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  )
}
