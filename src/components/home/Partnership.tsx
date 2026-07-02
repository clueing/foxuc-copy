"use client"

import Link from "next/link"

// 合作按钮数据接口
interface PartnerButtonProps {
  label: string
  href?: string
}

export default function Partnership() {
  // 合作按钮数据
  const buttons: PartnerButtonProps[] = [
    { label: "合作介绍", href: "/operate" },
    { label: "合作流程", href: "/operate#flow" },
    { label: "提交资料" },
    { label: "成功案例", href: "/operate#case" }
  ]

  return (
    <section className="bg-gradient-to-r from-red-500 to-orange-500 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* 标题区域 */}
        <h2 className="mb-4 text-3xl font-bold text-white">家园合作</h2>
        <p className="mb-8 text-lg text-white/90">
          携手网狐科技 互利共赢 开创新局面
        </p>

        {/* 按钮组 */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {buttons.map((button, index) =>
            button.href ? (
              <Link
                key={index}
                href={button.href}
                className="inline-flex min-w-[120px] items-center justify-center rounded-lg border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-red-500"
              >
                {button.label}
              </Link>
            ) : (
              <span
                key={index}
                className="inline-flex min-w-[120px] cursor-default items-center justify-center rounded-lg border border-white bg-transparent px-4 py-2 text-sm font-medium text-white/70"
              >
                {button.label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
