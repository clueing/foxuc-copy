"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

/* 联运介绍导航组件 */
interface InterNavProps {
  className?: string
  activeTab?: "intro" | "tech"
}

export default function InterNav({ className, activeTab = "intro" }: InterNavProps) {
  /* 导航链接数据 */
  const navLinks = [
    {
      href: "/inter",
      label: "联运介绍",
      isActive: activeTab === "intro"
    },
    {
      href: "/inter/tech",
      label: "技术服务",
      isActive: activeTab === "tech"
    }
  ]

  return (
    <div className="relative w-full mt-[-58px] z-10">
      <div className="w-[1350px] mx-auto">
        <div className="flex items-center justify-between border-b border-[#d4d4d4]">
          {/* 标签 */}
          <span className="text-[24px] leading-[38px] text-[#333]">
            网狐出海
          </span>

          {/* 切换链接 */}
          <div className="relative top-[8px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-block px-[30px] text-[18px] leading-[29px] transition-colors duration-500 no-underline",
                  link.isActive
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-[#666] hover:text-red-500"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
