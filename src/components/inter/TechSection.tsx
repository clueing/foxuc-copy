"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import ContactPopup from "@/components/ContactPopup"

/* 技术区块数据接口 */
interface TechSectionData {
  title: string
  englishTitle: string
  description: string
  image: string
  imagePosition: "left" | "right"
  bgColor?: "white" | "gray"
}

/* 技术区块组件属性 */
interface TechSectionProps extends TechSectionData {
  className?: string
}

/* 按钮组件 */
function TechButton({
  variant,
  onClick,
  children
}: {
  variant: "blue" | "yellow"
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded px-6 py-2 text-sm font-medium text-white transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-lg",
        variant === "blue"
          ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
          : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
      )}
    >
      {children}
    </button>
  )
}

/* 单个技术区块组件 */
export default function TechSection({
  title,
  englishTitle,
  description,
  image,
  imagePosition,
  bgColor = "white",
  className
}: TechSectionProps) {
  const [showPopup, setShowPopup] = useState(false)
  const isImageLeft = imagePosition === "left"

  return (
    <>
      <section
        className={cn(
          "py-16",
          bgColor === "gray" ? "bg-gray-50" : "bg-white",
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "flex flex-col items-center gap-12",
              "lg:flex-row",
              isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            )}
          >
            {/* 图片区域 */}
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* 文字区域 */}
            <div className="w-full lg:w-1/2">
              <div className="mb-6">
                <h2 className="mb-2 text-[38px] font-bold text-gray-800">
                  {title}
                </h2>
                <p className="text-[16px] text-gray-400">
                  {englishTitle}
                </p>
              </div>

              <p className="mb-8 text-[16px] leading-relaxed text-[#666]">
                {description}
              </p>

              <div className="flex gap-4">
                <TechButton variant="blue" onClick={() => setShowPopup(true)}>
                  了解更多
                </TechButton>
                <TechButton variant="yellow" onClick={() => setShowPopup(true)}>
                  立即咨询
                </TechButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系二维码弹窗 */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  )
}
