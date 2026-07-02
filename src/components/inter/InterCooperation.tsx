"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

// 合作方式组件
interface InterCooperationProps {
  className?: string
}

// 合作卡片数据接口
interface CooperationCardProps {
  image: string
  title: string
  description: string
}

// 单个合作卡片组件
function CooperationCard({ image, title, description }: CooperationCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* 图片区域 */}
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* 内容区域 */}
      <div className="p-6 text-center">
        <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default function InterCooperation({ className }: InterCooperationProps) {
  // 合作卡片数据
  const cards: CooperationCardProps[] = [
    {
      image: "/images/inter/cooperation1.png",
      title: "手游定制",
      description: "根据您的需求，定制开发专属的海外棋牌手游产品，包含UI设计、功能开发、多语言支持等完整服务。"
    },
    {
      image: "/images/inter/cooperation2.png",
      title: "联合运营",
      description: "与网狐共同运营海外棋牌手游项目，共享资源、技术、市场等全方位支持，实现互利共赢。"
    },
    {
      image: "/images/inter/cooperation3.png",
      title: "其他合作",
      description: "除定制开发和联合运营外，我们还提供技术授权、SDK接入、运营顾问等多种灵活的合作模式。"
    }
  ]

  return (
    <section className={cn("bg-white py-16", className)}>
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">合作方式</h2>
          <p className="text-lg text-gray-500">Cooperation Modes</p>
        </div>

        {/* 3个合作卡片水平排列 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <CooperationCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
