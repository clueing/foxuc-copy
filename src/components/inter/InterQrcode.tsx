"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

// 二维码展示组件
interface InterQrcodeProps {
  className?: string
}

export default function InterQrcode({ className }: InterQrcodeProps) {
  return (
    <section className={cn("bg-white py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
          {/* 二维码图片 */}
          <div className="relative h-[200px] w-[200px] overflow-hidden rounded-lg border border-gray-200">
            <Image
              src="/images/liu-qr.png"
              alt="微信二维码"
              fill
              className="object-contain"
            />
          </div>

          {/* 说明文字 */}
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-700">
              扫描添加上面微信，申请网狐海外联合运营。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
