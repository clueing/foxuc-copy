"use client"

import { 
  CodeIcon, 
  TrendingUpIcon, 
  AwardIcon, 
  HeadphonesIcon 
} from "@/components/icons"

// 优势项数据接口
interface AdvantageItemProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
}

// 单个优势项组件
function AdvantageItem({ icon, title, subtitle, description }: AdvantageItemProps) {
  return (
    <div className="group flex gap-4 rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* 图标区域 */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
        {icon}
      </div>
      
      {/* 内容区域 */}
      <div className="flex-1">
        <h3 className="mb-1 text-xl font-bold text-gray-800">{title}</h3>
        <p className="mb-2 text-sm font-medium text-red-500">{subtitle}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function WhyChoose() {
  // 四个优势项数据
  const advantages: AdvantageItemProps[] = [
    {
      icon: <CodeIcon className="h-7 w-7" />,
      title: "专注开发",
      subtitle: "十八年棋牌游戏开发经验",
      description: "自2004年成立以来，网狐专注棋牌游戏开发领域十八年，积累了丰富的行业经验和技术沉淀，深谙棋牌游戏市场需求与用户习惯。"
    },
    {
      icon: <TrendingUpIcon className="h-7 w-7" />,
      title: "研发技术",
      subtitle: "领先的研发技术和产品体系",
      description: "拥有100+人的专业技术团队，采用先进的技术架构和开发流程，提供从产品策划、UI设计到技术开发、运营支持的一站式服务。"
    },
    {
      icon: <AwardIcon className="h-7 w-7" />,
      title: "成功案例",
      subtitle: "超三百家成功合作案例",
      description: "已成功服务超过300家客户，涵盖棋牌、捕鱼、Slots等多种游戏类型，产品覆盖全球多个国家和地区，深受客户好评。"
    },
    {
      icon: <HeadphonesIcon className="h-7 w-7" />,
      title: "售后服务",
      subtitle: "一对一全方位售后服务",
      description: "提供7×24小时专业技术支持，一对一客户经理全程跟踪，从项目启动到上线运营，确保每一个环节都得到专业保障。"
    }
  ]

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">为什么选择网狐</h2>
          <p className="text-lg text-gray-500">Choose FOXUC and embark on success.</p>
        </div>

        {/* 2x2网格布局 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {advantages.map((advantage, index) => (
            <AdvantageItem key={index} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  )
}
