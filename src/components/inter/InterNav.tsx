"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

// 联运介绍导航组件
interface InterNavProps {
  className?: string
  activeTab?: "intro" | "tech"
}

export default function InterNav({ className, activeTab = "intro" }: InterNavProps) {
  // 导航链接数据
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
    <nav className={cn("border-b border-gray-200 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8">
          {/* 标签 */}
          <span className="py-4 text-lg font-bold text-gray-800">
            网狐出海
          </span>

          {/* 切换链接 */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-4 text-base font-medium transition-colors",
                  "hover:text-gray-900",
                  link.isActive
                    ? "text-gray-900"
                    : "text-gray-500"
                )}
              >
                {link.label}
                {/* active 状态红色下划线 */}
                {link.isActive && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-red-500" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
