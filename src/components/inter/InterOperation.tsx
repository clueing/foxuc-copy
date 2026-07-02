"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

// 联运运营介绍组件
interface InterOperationProps {
  className?: string
}

export default function InterOperation({ className }: InterOperationProps) {
  return (
    <section className={cn("bg-white py-16", className)}>
      <div className="container mx-auto px-4">
        {/* 左右两栏布局 */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* 左栏：2020年出海战略 */}
          <div className="flex-1">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              {/* 图片 */}
              <div className="relative h-[280px] w-[320px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/images/inter/operation-left.png"
                  alt="网狐出海战略"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 文字介绍 */}
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  2020年
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  手游行业的主流声音是&apos;出海&apos;。而网狐早在四年前，就已将手游出海作为公司的主要发展战略，投入了大量人力物力进行海外棋牌手游的研发和运营。
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  目前已开发包括英文版《Crash》、《Rummy》、《Teen Patti》、《Ludo》等多种游戏类型。
                </p>
              </div>
            </div>
          </div>

          {/* 右栏：海外市场招募 */}
          <div className="flex-1">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              {/* 图片 */}
              <div className="relative h-[280px] w-[320px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/images/inter/operation-right.png"
                  alt="海外手游联运"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 文字介绍 */}
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  海外市场
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  为帮助国内运营商更好地走出国门，网狐现面向全球招募海外手游联运伙伴。我们将提供完整的技术支持、运营指导和市场推广方案，助力合作伙伴快速切入海外市场。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
