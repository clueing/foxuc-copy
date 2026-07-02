"use client"

import { useState } from "react"
import ContactPopup from "./ContactPopup"

// 区域数据类型定义
interface RegionData {
  id: string
  label: string
  title: string
  content: string
}

// 区域数据
const regions: RegionData[] = [
  {
    id: "india",
    label: "印度棋牌联运",
    title: "印度棋牌联运",
    content:
      "网狐现已研发完成多款印度本土玩法棋牌游戏，如《Rummy》等……目前，网狐已与多家印度联运伙伴达成合作，数款印度本土平台已正式上市运营。",
  },
  {
    id: "southeast-asia",
    label: "东南亚棋牌联运",
    title: "东南亚棋牌联运",
    content:
      "东南亚作为很多国内厂商棋牌出海的第一站，拥有巨大市场潜力。诸如泰国的《Dummy》，印尼的《多米诺骨牌》等当地特色的棋牌游戏值得挖掘。",
  },
  {
    id: "north-america",
    label: "北美棋牌联运",
    title: "北美棋牌联运",
    content:
      "北美是全世界最大的棋牌市场，约占全球博弈游戏市场份额22%。诞生众多世界知名棋牌巨头。Crash、Truco等多种产品类型都在北美大放异彩。",
  },
  {
    id: "europe",
    label: "欧洲棋牌联运",
    title: "欧洲棋牌联运",
    content:
      "欧洲作为高端棋牌市场，用户付费率高，市场形势趋开放。各国都拥有本土特色棋牌玩法，再加上通用的娱乐、休闲类等，欧洲棋牌市场拥有巨大潜力。",
  },
  {
    id: "middle-east",
    label: "中东棋牌联运",
    title: "中东棋牌联运",
    content:
      "中东地区绝大多数国家信仰伊斯兰教，风俗较为传统和保守，线下娱乐单一，导致线上娱乐游戏市场存在天然的发展土壤，大R多，棋牌市场广泛。",
  },
]

// 海外联运组件
export default function Overseas() {
  // 当前选中的区域索引
  const [activeIndex, setActiveIndex] = useState(0)
  // 控制联系弹窗显示/隐藏
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2a44] py-20">
      {/* 容器 */}
      <div className="mx-auto max-w-[1200px] px-4">
        {/* 标题区 */}
        <div className="mb-12 text-center">
          {/* 主标题 */}
          <h2 className="mb-3 text-[38px] font-bold text-white">
            网狐棋牌海外联运
          </h2>
          {/* 英文副标题 */}
          <p className="mb-4 text-[16px] text-white/70">
            FOX chess games overseas transportation
          </p>
          {/* 描述 */}
          <p className="mb-6 text-[14px] text-white/60">
            百款自研棋牌产品，一手海外联运资料；开辟万亿海外棋牌市场。
          </p>
          {/* 详情咨询按钮 - 点击弹出联系二维码 */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="rounded bg-[#3b82f6] px-6 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#2563eb]"
          >
            详情咨询
          </button>
        </div>

        {/* 区域标签 */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {regions.map((region, index) => (
            <button
              key={region.id}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-6 py-2 text-[14px] font-medium transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#3b82f6] text-white shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>

        {/* 区域内容 */}
        <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
          {/* 区域标题 */}
          <h3 className="mb-4 text-[24px] font-bold text-white">
            {regions[activeIndex].title}
          </h3>
          {/* 区域描述 */}
          <p className="text-[16px] leading-relaxed text-white/80">
            {regions[activeIndex].content}
          </p>
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
