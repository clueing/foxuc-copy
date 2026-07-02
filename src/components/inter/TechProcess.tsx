"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

// 技术流程图组件
interface TechProcessProps {
  className?: string
}

export default function TechProcess({ className }: TechProcessProps) {
  return (
    <section className={cn("bg-white py-16", className)}>
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">
            合作流程
          </h2>
          <p className="text-lg text-gray-500">
            Cooperation process
          </p>
        </div>

        {/* 流程图 */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/inter/process.png"
            alt="合作流程"
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
